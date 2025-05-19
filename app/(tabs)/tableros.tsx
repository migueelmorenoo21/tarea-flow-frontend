import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { colors, shadows, borderRadius, spacing } from '../../constants/theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type Tablero = {
  id: string;
  tipo: 'Marketing' | 'Universidad' | 'Personal';
  titulo: string;
  tareasCompletadas: number;
  totalTareas: number;
};

const MOCK_TABLEROS: Tablero[] = [
  {
    id: '1',
    tipo: 'Marketing',
    titulo: 'Campaña verano 2025',
    tareasCompletadas: 5,
    totalTareas: 7,
  },
  {
    id: '2',
    tipo: 'Universidad',
    titulo: 'TFG + prácticas',
    tareasCompletadas: 3,
    totalTareas: 9,
  },
  {
    id: '3',
    tipo: 'Personal',
    titulo: 'Objetivos mensuales',
    tareasCompletadas: 9,
    totalTareas: 9,
  },
];

// Colores y iconos por tipo de tablero
const tipoTablero = {
  Marketing: {
    color: '#FF8C00',
    icono: <Ionicons name="megaphone-outline" size={24} color="#FF8C00" />,
  },
  Universidad: {
    color: '#6A5ACD',
    icono: <Ionicons name="school-outline" size={24} color="#6A5ACD" />,
  },
  Personal: {
    color: '#32CD32',
    icono: <MaterialCommunityIcons name="account-heart-outline" size={24} color="#32CD32" />,
  },
};

export default function Tableros() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text style={styles.titulo}>Espacios de trabajo</Text>

      <FlatList
        data={MOCK_TABLEROS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => {
          const tipo = tipoTablero[item.tipo];
          const progreso = item.tareasCompletadas / item.totalTareas;

          return (
            <TouchableOpacity
              onPress={() => {
                router.push(`/tableros/${item.id}`);
              }}
            >
              <View style={[styles.card, { borderLeftColor: tipo.color }]}>
                <View style={styles.header}>
                  {tipo.icono}
                  <Text style={styles.tipo}>{item.tipo}</Text>
                </View>

                <Text style={styles.tituloTablero}>{item.titulo}</Text>

                <View style={styles.progressContainer}>
                  <View
                    style={[
                      styles.progressBar,
                      { width: `${progreso * 100}%`, backgroundColor: tipo.color },
                    ]}
                  />
                </View>

                <Text style={styles.tareas}>
                  {item.tareasCompletadas}/{item.totalTareas} tareas completadas
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.lg,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    borderLeftWidth: 6,
    ...shadows.default,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: spacing.xs,
  },
  tipo: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMedium,
  },
  tituloTablero: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  tareas: {
    fontSize: 13,
    color: colors.textMedium,
  },
});
