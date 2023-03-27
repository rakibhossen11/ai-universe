/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#75e544",

          secondary: "#a9f9e1",

          accent: "#cc1099",

          neutral: "#131420",

          "base-100": "#FFFFFF",

          info: "#75BDD1",

          success: "#47EBD5",

          warning: "#F8B435",

          error: "#E6415D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
