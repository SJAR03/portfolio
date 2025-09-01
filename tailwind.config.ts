import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            colors: {
                border: 'hsl(var(--border-primary))',
                input: 'hsl(var(--border-primary))',
                ring: 'hsl(var(--primary))',
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    secondary: 'hsl(var(--background-secondary))',
                    tertiary: 'hsl(var(--background-tertiary))',
                },
                foreground: 'hsl(var(--foreground))',
                'primary-purple': {
                    DEFAULT: 'hsl(var(--primary-purple))',
                    bright: 'hsl(var(--primary-purple-bright))',
                    dark: 'hsl(var(--primary-purple-dark))',
                    muted: 'hsl(var(--primary-purple-muted))',
                },
                'accent-blue': 'hsl(var(--accent-blue))',
                'accent-cyan': 'hsl(var(--accent-cyan))',
                'accent-pink': 'hsl(var(--accent-pink))',
                'accent-orange': 'hsl(var(--accent-orange))',
                'accent-red': 'hsl(var(--accent-red))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    glow: 'hsl(var(--primary-glow))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                    border: 'hsl(var(--card-border))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;