import { StyleSheet } from 'react-native';
import { colors, shadows, spacing, borderRadius } from '../constants/theme';
export const perfilStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.lg * 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textDark,
  },
  perfilHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.default,
  },
  avatarTexto: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  perfilInfo: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  nombreUsuario: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
  },
  rolUsuario: {
    fontSize: 14,
    color: colors.textMedium,
    marginBottom: 4,
  },
  estadoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  estadoIndicador: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: 6,
  },
  estadoTexto: {
    fontSize: 13,
    color: colors.success,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: spacing.xs,
    alignItems: 'center',
  },
  tabButtonActivo: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textMedium,
  },
  tabButtonTextActivo: {
    color: colors.primary,
    fontWeight: '600',
  },
  seccion: {
    paddingTop: spacing.xs,
  },
  campoContainer: {
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: 14,
    color: colors.textMedium,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.sm,
    paddingVertical: 12,
    borderRadius: borderRadius.md,
    fontSize: 16,
    color: colors.textDark,
    borderWidth: 1,
    borderColor: colors.border,
  },
  textAreaInput: {
    height: 100,
    paddingTop: 12,
  },
  botonGuardar: {
    marginTop: spacing.md,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    ...shadows.default,
  },
  botonTexto: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  botonCancelar: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  botonCancelarTexto: {
    color: colors.textMedium,
    fontSize: 14,
  },
  estadisticasUsuario: {
    marginVertical: spacing.sm,
  },
  estadisticasTitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.xs,
    color: colors.textDark,
  },
  tarjetaEstadistica: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...shadows.default,
  },
  estadisticaItem: {
    flex: 1,
    alignItems: 'center',
  },
  estadisticaValor: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  estadisticaLabel: {
    fontSize: 12,
    color: colors.textMedium,
    marginTop: 2,
  },
  separadorVertical: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.xs,
  },
  botonCambiarPass: {
    marginTop: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  botonCambiarPassTexto: {
    color: colors.textDark,
    fontWeight: '500',
  },
});