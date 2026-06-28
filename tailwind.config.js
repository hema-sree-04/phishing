/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cyber: {
                    bg: '#050a1f', // Deep Navy
                    surface: '#0b132b', // Slightly lighter navy
                    card: '#111b3d',
                    neon: '#00f0ff', // Electric Cyan
                    safe: '#00ff66', // Cyber Green
                    danger: '#ff3366', // Alert Red
                    warning: '#ffc107',
                    textMuted: '#94a3b8'
                }
            },
            fontFamily: {
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
            },
            animation: {
                'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
                'grid': 'grid-fade 2s linear infinite',
                'scanline': 'scanline 3s linear infinite',
            },
            keyframes: {
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' }
                },
                'grid-fade': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(24px)' }
                },
                'scanline': {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(100vh)', opacity: '0' }
                }
            }
        }
    },
    plugins: [],
}
