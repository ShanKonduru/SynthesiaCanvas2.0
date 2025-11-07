import { createTheme, Theme } from '@mui/material/styles';

// Theme type definition
export type ThemeMode = 'light' | 'dark' | 'ocean';

// Light Theme - Clean and Professional
const getLightTheme = (): Theme =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2563eb', // Modern Blue
        light: '#3b82f6',
        dark: '#1d4ed8',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#7c3aed', // Purple
        light: '#8b5cf6',
        dark: '#6d28d9',
        contrastText: '#ffffff',
      },
      success: {
        main: '#10b981',
        light: '#34d399',
        dark: '#059669',
      },
      warning: {
        main: '#f59e0b',
        light: '#fbbf24',
        dark: '#d97706',
      },
      error: {
        main: '#ef4444',
        light: '#f87171',
        dark: '#dc2626',
      },
      info: {
        main: '#06b6d4',
        light: '#22d3ee',
        dark: '#0891b2',
      },
      background: {
        default: '#f8fafc',
        paper: '#ffffff',
      },
      text: {
        primary: '#0f172a',
        secondary: '#475569',
      },
      divider: '#e2e8f0',
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      'none',
      '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '10px 20px',
            fontSize: '0.95rem',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
            },
          },
          contained: {
            '&:hover': {
              boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
          elevation1: {
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
    },
  });

// Dark Theme - Modern Dark with Vibrant Accents
const getDarkTheme = (): Theme =>
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#60a5fa', // Bright Blue
        light: '#93c5fd',
        dark: '#3b82f6',
        contrastText: '#0f172a',
      },
      secondary: {
        main: '#a78bfa', // Bright Purple
        light: '#c4b5fd',
        dark: '#8b5cf6',
        contrastText: '#0f172a',
      },
      success: {
        main: '#34d399',
        light: '#6ee7b7',
        dark: '#10b981',
      },
      warning: {
        main: '#fbbf24',
        light: '#fcd34d',
        dark: '#f59e0b',
      },
      error: {
        main: '#f87171',
        light: '#fca5a5',
        dark: '#ef4444',
      },
      info: {
        main: '#22d3ee',
        light: '#67e8f9',
        dark: '#06b6d4',
      },
      background: {
        default: '#0f172a',
        paper: '#1e293b',
      },
      text: {
        primary: '#f1f5f9',
        secondary: '#94a3b8',
      },
      divider: '#334155',
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '10px 20px',
            fontSize: '0.95rem',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            },
          },
          contained: {
            '&:hover': {
              boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
    },
  });

// Ocean Theme - Teal/Cyan with Orange Accents
const getOceanTheme = (): Theme =>
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#14b8a6', // Teal
        light: '#2dd4bf',
        dark: '#0f766e',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#fb923c', // Orange
        light: '#fdba74',
        dark: '#ea580c',
        contrastText: '#ffffff',
      },
      success: {
        main: '#22c55e',
        light: '#4ade80',
        dark: '#16a34a',
      },
      warning: {
        main: '#eab308',
        light: '#facc15',
        dark: '#ca8a04',
      },
      error: {
        main: '#f43f5e',
        light: '#fb7185',
        dark: '#e11d48',
      },
      info: {
        main: '#06b6d4',
        light: '#22d3ee',
        dark: '#0891b2',
      },
      background: {
        default: '#0a1628',
        paper: '#112240',
      },
      text: {
        primary: '#e2e8f0',
        secondary: '#94a3b8',
      },
      divider: '#1e3a5f',
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '10px 20px',
            fontSize: '0.95rem',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(20,184,166,0.3)',
            },
          },
          contained: {
            '&:hover': {
              boxShadow: '0 6px 16px rgba(20,184,166,0.4)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: 'none',
            border: '1px solid rgba(20,184,166,0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
    },
  });

// Function to get theme based on mode
export const getTheme = (mode: ThemeMode): Theme => {
  switch (mode) {
    case 'light':
      return getLightTheme();
    case 'dark':
      return getDarkTheme();
    case 'ocean':
      return getOceanTheme();
    default:
      return getLightTheme();
  }
};

// Default export for backward compatibility
export const theme = getLightTheme();
