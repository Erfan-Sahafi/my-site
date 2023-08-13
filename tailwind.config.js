/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      fontFamily: {
        IranSansdn: "IranSansdn",
        IranSansBolddn: "IranSansBolddn",
        IranSans: "IranSans",
        IranSansDemiBold: "IranSansDemiBold",
        IranSansBold: "IranSansBold"
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      animation:{
        fadeIn: 'fadeIn 1s linear forwards',
        Dote: 'Dote 2s linear forwards'
      },
      keyframes:{
         fadeIn:{
          '0%': {opacity : '0'},
          '100%': {opacity : '1'},
        },
        Dote:{
          '0%': {transform:'rotate(0deg)'},
          '100%': {transform:'rotate(calc(3.6deg * 85))'}
        }
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
