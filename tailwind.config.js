/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ini adalah kunci utamanya. Menimpa default "sans" Tailwind menjadi Poppins
        sans: ["var(--font-poppins)", "sans-serif"], 
        
        // Yang di bawah ini biarkan saja sebagai cadangan jika sewaktu-waktu butuh
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};