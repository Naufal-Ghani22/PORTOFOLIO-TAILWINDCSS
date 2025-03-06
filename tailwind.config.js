/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },

    extend: {
      colors:{
        primary:'#3D8D7A',
        second:'#27445D',
        third:'#00DF9A',
        background:'#dff9f1',
        text:'#64748b',
      },

      screens:{
        '2xl': '1720px',
      }
    },


  },
  plugins: [],
}

