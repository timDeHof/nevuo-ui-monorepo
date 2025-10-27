// packages/core/src/theme/index.ts

import { Variants } from 'framer-motion';

/** ----------------------------
 * COLORS
 * ---------------------------- */
export const colors = {
  primary: {
    DEFAULT: '#1D4ED8', // Tailwind blue-700
    light: '#3B82F6', // Tailwind blue-500
    dark: '#1E40AF', // Tailwind blue-800
  },
  secondary: {
    DEFAULT: '#D97706', // Tailwind amber-600
    light: '#F59E0B', // amber-500
    dark: '#B45309', // amber-700
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray100: '#F3F4F6',
    gray900: '#111827',
  },
  success: '#22C55E',
  error: '#EF4444',
  warning: '#FACC15',
};

/** ----------------------------
 * DARK MODE COLORS
 * ---------------------------- */
export const darkModeColors = {
  background: '#111827',
  surface: '#1F2937',
  text: '#F3F4F6',
  muted: '#9CA3AF',
};

/** ----------------------------
 * TYPOGRAPHY
 * ---------------------------- */
export const typography = {
  fonts: {
    sans: "'Inter', system-ui, sans-serif",
    mono: "'Fira Code', monospace",
  },
  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  weights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

/** ----------------------------
 * SPACING
 * ---------------------------- */
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

/** ----------------------------
 * BORDER RADIUS
 * ---------------------------- */
export const radius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.25rem',
};

/** ----------------------------
 * SHADOWS
 * ---------------------------- */
export const shadows = {
  soft: '0 2px 10px rgba(0,0,0,0.06)',
  medium: '0 4px 20px rgba(0,0,0,0.1)',
};

/** ----------------------------
 * MOTION VARIANTS
 * ---------------------------- */
export const motionVariants: Record<string, Variants> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
  },
  slideUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

/** ----------------------------
 * EXPORT THEME
 * ---------------------------- */
export const theme = {
  colors,
  darkModeColors,
  typography,
  spacing,
  radius,
  shadows,
  motionVariants,
};

export type Theme = typeof theme;
