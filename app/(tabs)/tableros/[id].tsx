import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../../../constants/theme';

export default function TableroDetalle() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text style={styles.titulo}>Espacio de trabajo</Text>
      <Text style={styles.subtitulo}>ID del tablero: <Text style={styles.id}>{id}</Text></Text>

      <View style={styles.mensaje}>
        <Text style={styles.textoMensaje}>
          Aquí verás las tareas organizadas por columnas tipo "To Do", "Doing" y "Done".
        </Text>
      </View>
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
    marginBottom: spacing.sm,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textMedium,
    marginBottom: spacing.md,
  },
  id: {
    color: colors.primary,
    fontWeight: '600',
  },
  mensaje: {
    marginTop: spacing.md,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: spacing.sm,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
      elevation: 2,
    },
  },
  textoMensaje: {
    fontSize: 15,
    color: colors.textDark,
  },
});
