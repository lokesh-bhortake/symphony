/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pattens-blue': {
          '50': 'hsl(203, 87%, 97%)',
          '100': 'hsl(204, 77%, 92%)',
          '200': 'hsl(201, 77%, 86%)',
          '300': 'hsl(199, 77%, 74%)',
          '400': 'hsl(198, 77%, 60%)',
          '500': 'hsl(198, 72%, 48%)',
          '600': 'hsl(200, 80%, 39%)',
          '700': 'hsl(201, 79%, 32%)',
          '800': 'hsl(200, 74%, 27%)',
          '900': 'hsl(202, 66%, 24%)',
          '950': 'hsl(204, 65%, 16%)',
        },
      },
    },
    plugins: [],
  }
}

