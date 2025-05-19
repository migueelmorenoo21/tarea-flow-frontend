import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../../constants/theme';
import { createStyles } from '../../styles/createStyles';

export default function CrearTablero() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [tareas, setTareas] = useState<string[]>([]);

  const handleCrear = () => {
    // Simulación de creación
    console.log('Tablero creado:', {
      nombre,
      descripcion,
      tareas,
    });

    // Limpiar campos
    setNombre('');
    setDescripcion('');
    setNuevaTarea('');
    setTareas([]);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea.trim()]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (index: number) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  // Función para manejar tecla Enter en el input de tareas
  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Enter' && nuevaTarea.trim()) {
      agregarTarea();
    }
  };

  return (
    <SafeAreaView style={createStyles.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={createStyles.keyboardView}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={createStyles.scrollContent}
        >
          {/* Header con diseño mejorado */}
          <View style={createStyles.header}>
            <Text style={createStyles.titulo}>Crear nuevo tablero</Text>
            <View style={createStyles.headerUnderline} />
          </View>

          {/* Tarjeta de formulario con estética mejorada */}
          <View style={createStyles.card}>
            <View style={createStyles.formulario}>
              <View style={createStyles.inputGroup}>
                <Text style={createStyles.label}>Nombre del tablero</Text>
                <TextInput
                  style={createStyles.input}
                  value={nombre}
                  onChangeText={setNombre}
                  placeholder="Ej. Proyecto App, Finanzas..."
                  placeholderTextColor={colors.textMedium}
                />
              </View>

              <View style={createStyles.inputGroup}>
                <Text style={createStyles.label}>Descripción</Text>
                <TextInput
                  style={[createStyles.input, createStyles.textArea]}
                  value={descripcion}
                  onChangeText={setDescripcion}
                  multiline
                  placeholder="Objetivo o propósito del tablero"
                  placeholderTextColor={colors.textMedium}
                  textAlignVertical="top"
                />
              </View>

              {/* Sección mejorada para añadir tareas */}
              <View style={createStyles.inputGroup}>
                <Text style={createStyles.label}>Añadir tareas iniciales</Text>
                <Text style={createStyles.sublabel}>Añade las primeras tareas para tu tablero</Text>
                <View style={createStyles.tareaInputContainer}>
                  <TextInput
                    style={createStyles.tareaInput}
                    value={nuevaTarea}
                    onChangeText={setNuevaTarea}
                    placeholder="Escribe una tarea"
                    placeholderTextColor={colors.textMedium}
                    onKeyPress={handleKeyPress}
                  />
                  <TouchableOpacity 
                    style={[
                      createStyles.botonAgregar,
                      !nuevaTarea.trim() && createStyles.botonDesactivado
                    ]} 
                    onPress={agregarTarea}
                    disabled={!nuevaTarea.trim()}
                  >
                    <Text style={createStyles.botonAgregarTexto}>Agregar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Lista de tareas añadidas con estilo "chip" azul */}
              {tareas.length > 0 && (
                <View style={createStyles.tareasContainer}>
                  <Text style={createStyles.tareasTitle}>Tareas añadidas:</Text>
                  <View style={createStyles.chipContainer}>
                    {tareas.map((tarea, index) => (
                      <View key={index} style={createStyles.chip}>
                        <Text style={createStyles.chipText} numberOfLines={1}>{tarea}</Text>
                        <TouchableOpacity
                          style={createStyles.chipDelete}
                          onPress={() => eliminarTarea(index)}
                        >
                          <Ionicons name="close" size={16} color={colors.white} />
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>

          {/* Vista previa del tablero (estilo mejorado) */}
          {nombre && (
            <View style={createStyles.previewSection}>
              <Text style={createStyles.previewTitle}>Vista previa</Text>
              <View style={createStyles.previewCard}>
                <View style={createStyles.previewHeader}>
                  <Text style={createStyles.previewCardTitle} numberOfLines={1}>{nombre}</Text>
                </View>
                {descripcion ? (
                  <Text style={createStyles.previewDescription} numberOfLines={2}>{descripcion}</Text>
                ) : null}
                
                {/* Vista previa de tareas */}
                {tareas.length > 0 && (
                  <View style={createStyles.previewTareas}>
                    <Text style={createStyles.previewTareasTitle}>Tareas iniciales: {tareas.length}</Text>
                    <View style={createStyles.previewTareasList}>
                      {tareas.slice(0, 3).map((tarea, index) => (
                        <View key={index} style={createStyles.previewTareaItem}>
                          <Text style={createStyles.previewTareaText} numberOfLines={1}>• {tarea}</Text>
                        </View>
                      ))}
                      {tareas.length > 3 && (
                        <Text style={createStyles.previewTareaMore}>+{tareas.length - 3} más</Text>
                      )}
                    </View>
                  </View>
                )}
              </View>
            </View>
          )}

          <TouchableOpacity
            style={[
              createStyles.botonCrear, 
              nombre.trim() === '' && createStyles.botonDesactivado
            ]}
            onPress={handleCrear}
            disabled={nombre.trim() === ''}
          >
            <Text style={createStyles.botonTexto}>Crear tablero</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}