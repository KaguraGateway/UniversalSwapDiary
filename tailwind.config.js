module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'zen': "Zen Maru Gothic",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'background': 'url(../public/background2.png)',
                'kumo': 'url(../public/kumo.png)',
                'lace': 'url(../public/lace.svg)',
                'lace_invert': 'url(../public/lace_invert.svg)',
            },
            border: {
                'loborder': '3px solid rgba(255, 250, 214, 0.60);'
            }
        },
    },
    plugins: [],
}
