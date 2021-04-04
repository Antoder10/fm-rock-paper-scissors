module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '24': '24px'
      },
      fontFamily: {
        'sans': ['Barlow Semi Condensed', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'background-from': 'hsl(214, 47%, 23%)',
        'background-to': 'hsl(237, 49%, 15%)',
        'scissors': 'hsl(39, 89%, 49%)',
        'paper': 'hsl(230, 89%, 62%)',
        'rock': 'hsl(349, 71%, 52%)'
      },
      backgroundImage: theme => ({
        'triangle': "url('/src/images/bg-triangle.svg')",
        'paper-img': "url('/src/images/icon-paper.svg')",
        'rock-img': "url('/src/images/icon-rock.svg')",
        'scissors-img': "url('/src/images/icon-scissors.svg')",
      })
    },
  },
  variants: {},
  plugins: [],
}
