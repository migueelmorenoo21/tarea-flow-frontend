import { StyleSheet } from 'react-native';
import { colors, shadows, spacing, borderRadius } from '../constants/theme';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  saludo: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textDark,
  },
  subtituloHeader: {
    fontSize: 14,
    color: colors.textMedium,
    marginTop: 2,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  statsContainer: {
    marginBottom: spacing.sm,
  },
  statsCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },
  statsPercent: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: spacing.xs,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  statsDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  statText: {
    fontSize: 14,
    color: colors.textMedium,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  botonPrincipal: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  botonTexto: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    flex: 1,
  },
  botonTextoSecundario: {
    color: colors.textDark,
    fontWeight: '500',
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  listaTareas: {
    paddingBottom: spacing.lg * 2,
  },
  loadingContainer: {
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  cardTarea: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xs,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  tareaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloTarea: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textDark,
    flex: 1,
  },
  tareaCompletada: {
    textDecorationLine: 'line-through',
    color: colors.textMedium,
  },
  checkmarkContainer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: colors.white,
    fontWeight: 'bold',
  },
  tareaFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8, 
  },
  fechaTarea: {
    fontSize: 13,
    color: colors.textMedium,
  },
  estadoIndicador: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  textoSecundario: {
    fontSize: 14,
    color: colors.textMedium,
    textAlign: 'center',
  },
  swipeActionComplete: {
  backgroundColor: colors.success,
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  height: '100%',
},
swipeActionDelete: {
  backgroundColor: colors.danger || '#EF4444',
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  height: '100%',
},
});