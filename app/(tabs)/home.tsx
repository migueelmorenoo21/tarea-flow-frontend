import { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, shadows } from '../../constants/theme';
import { homeStyles } from '../../styles/homeStyles';
import { useRouter } from 'expo-router';
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { useUser } from '../../hooks/useUser';

type Tarea = {
  id: number;
  titulo: string;
  fecha: string;
  completada: boolean;
};

export default function Home() {
  const router = useRouter();
  const { user, loading, error } = useUser();
  const [tareasRecientes, setTareasRecientes] = useState<Tarea[]>([]);

  useEffect(() => {
    const mockTareas: Tarea[] = [
      { id: 1, titulo: 'Actualizar diseño de login', fecha: '2025-05-16', completada: true },
      { id: 2, titulo: 'Revisar tareas pendientes del Board A', fecha: '2025-05-15', completada: false },
      { id: 3, titulo: 'Añadir navegación con expo-router', fecha: '2025-05-14', completada: true },
      { id: 4, titulo: 'Optimizar rendimiento de la app', fecha: '2025-05-13', completada: false },
    ];
    setTareasRecientes(mockTareas);}, []);
  // Funciones para manejar acciones en las tareas
  const marcarCompletada = (id: number) => {
    setTareasRecientes(tareas => 
      tareas.map(tarea => 
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id: number) => {
    Alert.alert(
      "Eliminar tarea",
      "¿Estás seguro de que quieres eliminar esta tarea?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Eliminar", 
          style: "destructive",
          onPress: () => {
            setTareasRecientes(tareas => tareas.filter(tarea => tarea.id !== id));
          }
        }
      ]
    );
  };

  // Renderizador de acciones a la izquierda (al deslizar hacia la derecha)
  const renderLeftActions = (tarea: Tarea) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={{
            backgroundColor: colors.success,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: '100%',
          }}
          onPress={() => marcarCompletada(tarea.id)}
        >
          <Ionicons 
            name={tarea.completada ? "close-outline" : "checkmark-outline"} 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{
            backgroundColor: colors.danger,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: '100%',
          }}
          onPress={() => eliminarTarea(tarea.id)}
        >
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  const completadas = tareasRecientes.filter(t => t.completada).length;
  const pendientes = tareasRecientes.filter(t => !t.completada).length;
  const total = tareasRecientes.length;
  const porcentajeCompletado = total > 0 ? Math.round((completadas / total) * 100) : 0;

  return (
    <SafeAreaView style={homeStyles.container} edges={['top', 'left', 'right']}>
      <View style={homeStyles.header}>
        <View>
          <Text style={homeStyles.saludo}>Hola, {user?.name}</Text>
          <Text style={homeStyles.subtituloHeader}>Tu espacio de trabajo</Text>
        </View>
        <TouchableOpacity style={homeStyles.avatarContainer}>
          <Text style={homeStyles.avatarText}>{user?.name.charAt(0)}</Text>
        </TouchableOpacity>
      </View>

      {/* Panel de estadísticas estilo Trello */}
      <View style={homeStyles.statsContainer}>
        <View style={[homeStyles.statsCard, shadows.default]}>
          <View style={homeStyles.statsHeader}>
            <Text style={homeStyles.statsTitle}>Resumen de actividad</Text>
            <Text style={homeStyles.statsPercent}>{porcentajeCompletado}%</Text>
          </View>
          
          <View style={homeStyles.progressBarContainer}>
            <View style={[homeStyles.progressBar, { width: `${porcentajeCompletado}%` }]} />
          </View>
          
          <View style={homeStyles.statsDetails}>
            <View style={homeStyles.statItem}>
              <View style={[homeStyles.statDot, { backgroundColor: colors.success }]} />
              <Text style={homeStyles.statText}>Completadas: {completadas}</Text>
            </View>
            <View style={homeStyles.statItem}>
              <View style={[homeStyles.statDot, { backgroundColor: colors.warning }]} />
              <Text style={homeStyles.statText}>Pendientes: {pendientes}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={homeStyles.actionsRow}>
        <TouchableOpacity onPress={() => router.push('/tableros')} style={homeStyles.botonPrincipal}>
          <Text style={homeStyles.botonTexto}>Ver mis tableros</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={homeStyles.botonSecundario}>
          <Text style={homeStyles.botonTextoSecundario}>+ Nueva tarea</Text>
        </TouchableOpacity>
      </View>

      <Text style={homeStyles.sectionTitle}>Tareas recientes</Text>

      <ScrollView 
        contentContainerStyle={homeStyles.listaTareas}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <View style={homeStyles.loadingContainer}>
            <Text style={homeStyles.textoSecundario}>Cargando tareas...</Text>
          </View>
        ) : (
          tareasRecientes.map((tarea) => (
            Platform.OS === 'web' ? (
              // Versión sin swipe para web para evitar errores
              <TouchableOpacity 
                key={tarea.id} 
                style={[homeStyles.cardTarea, shadows.default]}
                activeOpacity={0.7}
              >
                <View style={homeStyles.tareaHeader}>
                  <Text 
                    style={[
                      homeStyles.tituloTarea, 
                      tarea.completada && homeStyles.tareaCompletada
                    ]}
                  >
                    {tarea.titulo}
                  </Text>
                  {tarea.completada && (
                    <View style={homeStyles.checkmarkContainer}>
                      <Text style={homeStyles.checkmark}>✓</Text>
                    </View>
                  )}
                </View>
                <View style={homeStyles.tareaFooter}>
                  <Text style={homeStyles.fechaTarea}>{tarea.fecha}</Text>
                  <View style={[
                    homeStyles.estadoIndicador, 
                    { backgroundColor: tarea.completada ? colors.success : colors.warning }
                  ]} />
                </View>
              </TouchableOpacity>
            ) : (
              // Versión con swipe para iOS/Android
              <Swipeable
                key={tarea.id}
                renderLeftActions={() => renderLeftActions(tarea)}
                overshootLeft={false}
              >
                <TouchableOpacity 
                  style={[homeStyles.cardTarea, shadows.default]}
                  activeOpacity={0.7}
                >
                  <View style={homeStyles.tareaHeader}>
                    <Text 
                      style={[
                        homeStyles.tituloTarea, 
                        tarea.completada && homeStyles.tareaCompletada
                      ]}
                    >
                      {tarea.titulo}
                    </Text>
                    {tarea.completada && (
                      <View style={homeStyles.checkmarkContainer}>
                        <Text style={homeStyles.checkmark}>✓</Text>
                      </View>
                    )}
                  </View>
                  <View style={homeStyles.tareaFooter}>
                    <Text style={homeStyles.fechaTarea}>{tarea.fecha}</Text>
                    <View style={[
                      homeStyles.estadoIndicador, 
                      { backgroundColor: tarea.completada ? colors.success : colors.warning }
                    ]} />
                  </View>
                </TouchableOpacity>
              </Swipeable>
            )
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
} 