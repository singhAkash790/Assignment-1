 {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'cover-pic': "url('image/bg.png')" },
      fontFamily: {
        "AA":['Zilap Orion Linear Personal Use']
      },
      
    },
    
  },
  plugins: [],
}
