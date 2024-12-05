/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      boxShadow: {
        'inner-top-light': 'inset 0px 1px 1px rgba(0, 0, 0, 0.5)', 
        'inner-top-dark': 'inset 0px 1px 1px rgba(211, 211, 211, 0.5)',
      },
      colors: {
        dark: {
          iconsBgColor: "#4B4B4B",
          headingText: "#FFFFFF", 
          paragraphText: "#9B9CA1", 
          cardBg: "#242424", 
          analyticNumberColor : "#33C6AB",
          analyticsBg: "#242424",
          navbarBg: "#0F0F0F", 
          buttonBg: "#1F1F1F",
          priceCardBg : "#161616",
          pageBg: "#1D1C20", 
          greenBg: "#171F05",
          lightGreen: "#A3DC2F",
          darkGreen:"#1F7A1F",
          primary: "#1E40AF", 
          secondary: "#F59E0B", 
          accent: "#10B981", 
          danger: "#EF4444", 
          customGray: {
            light: "#F3F4F6", 
            DEFAULT: "#9CA3AF", 
            dark: "#4B5563", 
          },
        },

        
          light: {
            primary: "#1E40AF", 
            secondary: "#F59E0B", 
            accent: "#10B981", 
            danger: "#EF4444", 
            customGray: {
              light: "#F3F4F6", 
              DEFAULT: "#9CA3AF", 
              dark: "#4B5563", 
              analyticsBg: "#E5EADB",
              navbarBg: "#FFFFFF", 
              buttonBg: "#F6F6F6",
              pageBg: "#F6F6F6", 
              headingText: "#000000", 
              priceCardBg : "#F4F4F4",
              paragraphText: "#828282", 
              cardBg: "#FFFFFF",
            },
          },
      },
    },
  },
  plugins: [],
};
