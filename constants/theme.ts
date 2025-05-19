// /constants/theme.ts

export const colors = {
  primary: '#1E90FF',
  success: '#32CD32',
  warning: '#FF6347',
  danger: '#EF4444',  // Añade esta nueva propiedad
  textDark: '#333',
  textMedium: '#666',
  background: '#fafafa',
  white: '#fff',
  border: '#ddd',
};

export const shadows = {
  default: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android
  },
  hover: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
};

export const borderRadius = {
  sm: 6,
  md: 8,
};

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
};

export const transition = {
  fast: '300ms',
  normal: '400ms',
};
