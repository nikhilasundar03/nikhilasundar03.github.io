/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#f4f1eb',
          50: '#ebe6de',
          100: '#e2ddd4',
          200: '#d4cec4',
          300: '#c4bdb2',
          400: '#a8a095',
        },
        neon: {
          rose: '#9f2d20',
          gold: '#6b5c3e',
          violet: '#1e3a5f',
          lime: '#2d4a3e',
          pink: '#5c4a5f',
        },
        surface: {
          DEFAULT: '#ffffff',
          light: '#faf8f5',
          lighter: '#f0ebe3',
        },
        muted: {
          DEFAULT: '#78716c',
          light: '#a8a29e',
        },
        text: {
          DEFAULT: '#1c1917',
          muted: '#57534e',
          bright: '#0c0a09',
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'paper-grain':
          'radial-gradient(ellipse at 20% 30%, rgba(159, 45, 32, 0.04) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(30, 58, 95, 0.05) 0%, transparent 50%)',
        'neon-mesh': 'none',
        'neon-grid': 'none',
        'neon-gradient-rose': 'linear-gradient(135deg, #9f2d20, #1e3a5f)',
        'neon-gradient-gold': 'linear-gradient(135deg, #6b5c3e, #1e3a5f)',
        'neon-gradient-full': 'linear-gradient(135deg, #9f2d20, #1e3a5f, #6b5c3e)',
      },
      boxShadow: {
        'neon-sm': '0 1px 3px rgba(28, 25, 23, 0.06)',
        'neon-md': '0 8px 30px rgba(28, 25, 23, 0.08)',
        'neon-lg': '0 16px 48px rgba(28, 25, 23, 0.1)',
        'neon-gold-sm': '0 1px 3px rgba(28, 25, 23, 0.06)',
        'neon-gold-md': '0 8px 30px rgba(28, 25, 23, 0.08)',
        'neon-violet-sm': '0 1px 3px rgba(28, 25, 23, 0.06)',
        'neon-violet-md': '0 8px 30px rgba(28, 25, 23, 0.08)',
        'neon-glow': '0 12px 40px rgba(28, 25, 23, 0.07)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'thread-flow': 'thread-flow 3s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'thread-flow': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
    },
  },
  plugins: [],
}
