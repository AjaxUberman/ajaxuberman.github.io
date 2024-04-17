/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "fira-sans": ["Fira Sans", "sans-serif"],
      },
      colors: {
        "bg-bugday": "#FEECE2",
        "pastel-yesil": "#AFD198",
        "pastel-kirmizi": "#D37676",
        "pastel-sari": "#F8D87B",
        "pastel-mor": "#F3BFEE",
        "pastel-mavi": "#90AEF6",
        "siyah-text": "#31363F",
        "pastel-bugday": "#EEE4B1",
        "pastel-pembe": "#FFB4B7",
        "active-item": "#E1F7F5",
      },
      boxShadow: {
        subtle: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;",
        extra: " 15px 15px 0px 0px rgba(0,0,0);",
      },
      backgroundImage: {
        "games-bg":
          "url('https://static.vecteezy.com/system/resources/previews/009/948/847/original/brown-aesthetic-abstract-minimal-background-perfect-for-wallpaper-backdrop-postcard-background-vector.jpg')",
        "websites-bg":
          "url(https://wallpapers.com/images/hd/minimalist-background-o4thunr26czh1ln5.jpg)",
        "aboutme-bg": "url(https://wallpaperaccess.com/full/1295663.jpg)",
      },
    },
  },
  plugins: [],
};
