export const colors = {
  primary: '#0e60ff',
  primaryDark: '#002ad7',
  primaryLight: '#f0f6ff',
  accent: '#46fffb',
  background: '#e8edf5',
  surface: '#ffffff',
  card: '#f4f7fb',
  border: '#e2e8f0',
  textPrimary: '#0f172a',
  textSecondary: '#64748b',
  textDisabled: '#94a3b8',
  textInverse: '#ffffff',
  success: '#14b8a6',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  shadowColor: '#000000',
} as const;

export type Colors = typeof colors;
