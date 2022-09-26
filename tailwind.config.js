
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },
    extend: {
      fontFamily: {
        quentin: ["Quentin", "sans-serif"],
        nunito:["Nunito", "sans-serif"],
        squarepeg:["Square Peg", "cursive"],
      },
      colors: {
        'primary': '#393E50',
        'secondary': '#5C5C5C',
        
      },
    //   backgroundImage: {
    //     'dotted-bg': "url('./assets/images/about_us/dotted.png')",
    //     'blog-bg': "url('./assets/images/blog/blog_bg.png')",
    //     'single-blog': "url('./assets/images/single_blog/single_bg.png')",
    //     'single-blog-mob': "url('./assets/images/single_blog/single_bg_mob.png')",
    // },

    },
  },
  plugins: [],
}