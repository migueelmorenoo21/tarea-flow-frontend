import { StyleSheet } from 'react-native';
import { colors, shadows, spacing, borderRadius } from '../constants/theme';

export const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.lg,
  },
  header: {
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  headerUnderline: {
    width: 40,
    height: 4,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    ...shadows.default,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  formulario: {
    marginBottom: spacing.sm, // Reemplazo gap por marginBottom
  },
  inputGroup: {
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 4, // Valor explícito en lugar de división
  },
  sublabel: {
    fontSize: 14,
    color: colors.textMedium,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    fontSize: 16,
    color: colors.textDark,
    borderWidth: 1,
    borderColor: colors.border,
  },
  textArea: {
    minHeight: 80,
    paddingTop: spacing.sm,
  },
  tareaInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tareaInput: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    fontSize: 16,
    color: colors.textDark,
    borderWidth: 1,
    borderColor: colors.border,
  },
  botonAgregar: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    marginLeft: spacing.xs,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.default,
    height: 48,
  },
  botonAgregarTexto: {
    color: colors.white,
    fontWeight: '600',
  },
  tareasContainer: {
    marginTop: spacing.xs,
  },
  tareasTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: spacing.xs, // Reemplazo gap con márgenes
  },
  chip: {
    backgroundColor: '#E6F3FF', // Color explícito en lugar de primaryLight
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 12,
    paddingRight: 6,
    marginBottom: 6,
    marginRight: 6, // Para compensar la falta de gap
    ...shadows.default,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  chipText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
    maxWidth: 200,
  },
  chipDelete: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  botonCrear: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    ...shadows.hover, // Usar shadows.hover en lugar de shadows.strong
    marginTop: spacing.sm,
  },
  botonDesactivado: {
    opacity: 0.5,
  },
  botonTexto: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  previewSection: {
    marginBottom: spacing.md,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  previewCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    ...shadows.default,
    overflow: 'hidden',
  },
  previewHeader: {
    backgroundColor: colors.primary,
    padding: spacing.xs,
  },
  previewCardTitle: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  previewDescription: {
    padding: spacing.xs,
    fontSize: 14,
    color: colors.textMedium,
  },
  previewTareas: {
    padding: spacing.xs,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  previewTareasTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 4,
  },
  previewTareasList: {
    marginTop: 4,
  },
  previewTareaItem: {
    marginBottom: 2,
  },
  previewTareaText: {
    fontSize: 14,
    color: colors.textMedium,
  },
  previewTareaMore: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '500',
    marginTop: 2,
  },
});