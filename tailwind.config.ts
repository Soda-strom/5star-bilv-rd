import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9922A',
          hover:   '#a87820',
          dim:     'rgba(201,146,42,0.08)',
          border:  'rgba(201,146,42,0.30)',
        },
        surface: {
          DEFAULT: '#f6f6f6',
          2:       '#efefef',
        },
        ink: {
          DEFAULT: '#0d0d0d',
          muted:   'rgba(13,13,13,0.52)',
          dim:     'rgba(13,13,13,0.28)',
        },
        line: {
          DEFAULT: 'rgba(0,0,0,0.09)',
          hover:   'rgba(0,0,0,0.22)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant', 'serif'],
        body:    ['var(--font-body)',    'Jost',      'sans-serif'],
      },
      transitionTimingFunction: {
        'out-strong':    'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
}

export default config
