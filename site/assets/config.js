

tailwind.config = {
    darkMode: 'class',
    content: ["./assets/**/*.{html,js}"],
    theme: {
    extend: {
        fontFamily: {
        'nothingyoucoulddo': ['"Nothing You Could Do"', 'cursive'],
        'signika': ['Signika', 'sans-serif'],
        },
        colors: {
        background: {
            light: '#ffffff',
            dark: '#121212',
        },
        text: {
            light: '#1F2937',
            dark: '#E5E7EB',
        },
        primary: {
            light: '#2563EB',
            dark: '#3B82F6',
        },
        secondary: {
            light: '#D97706',
            dark: '#FBBF24',
        }
        },
    },
    },
    plugins: [],
}
