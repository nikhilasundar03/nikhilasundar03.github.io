/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0b1222',
          50: '#111b2e',
          100: '#121a2e',
          200: '#182236',
          300: '#1e2a3f',
          400: '#243049',
        },
        neon: {
          rose: '#2dd4bf',
          gold: '#fbbf24',
          violet: '#818cf8',
          lime: '#34d399',
          pink: '#a78bfa',
        },
        surface: {
          DEFAULT: '#121a2e',
          light: '#182236',
          lighter: '#1e2a3f',
        },
        muted: {
          DEFAULT: '#94a3b8',
          light: '#cbd5e1',
        },
        text: {
          DEFAULT: '#f1f5f9',
          muted: '#94a3b8',
          bright: '#f8fafc',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'neon-mesh':
          'radial-gradient(ellipse at 20% 50%, rgba(45,212,191,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(129,140,248,0.07) 0%, transparent 50%), radial-gradient(ellipse at 50% 85%, rgba(251,191,36,0.05) 0%, transparent 45%)',
        'neon-grid':
          'linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.04) 1px, transparent 1px)',
        'neon-gradient-rose': 'linear-gradient(135deg, #2dd4bf, #818cf8)',
        'neon-gradient-gold': 'linear-gradient(135deg, #fbbf24, #818cf8)',
        'neon-gradient-full': 'linear-gradient(135deg, #2dd4bf, #818cf8, #fbbf24)',
      },
      backgroundSize: {
        'grid-size': '48px 48px',
      },
      boxShadow: {
        'neon-sm': '0 0 6px rgba(45,212,191,0.25), 0 0 14px rgba(45,212,191,0.08)',
        'neon-md': '0 0 12px rgba(45,212,191,0.35), 0 0 36px rgba(45,212,191,0.12)',
        'neon-lg': '0 0 24px rgba(45,212,191,0.4), 0 0 64px rgba(45,212,191,0.15)',
        'neon-gold-sm': '0 0 6px rgba(251,191,36,0.25), 0 0 14px rgba(251,191,36,0.08)',
        'neon-gold-md': '0 0 12px rgba(251,191,36,0.35), 0 0 36px rgba(251,191,36,0.12)',
        'neon-violet-sm': '0 0 6px rgba(129,140,248,0.25), 0 0 14px rgba(129,140,248,0.08)',
        'neon-violet-md': '0 0 12px rgba(129,140,248,0.35), 0 0 36px rgba(129,140,248,0.12)',
        'neon-glow':
          '0 0 18px rgba(45,212,191,0.2), 0 0 48px rgba(129,140,248,0.12), inset 0 0 20px rgba(45,212,191,0.04)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-border': 'glow-border 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        typing: 'typing 3.5s steps(40, end)',
        'thread-flow': 'thread-flow 3s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-border': {
          '0%, 100%': { borderColor: 'rgba(45,212,191,0.35)' },
          '50%': { borderColor: 'rgba(45,212,191,0.65)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
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
