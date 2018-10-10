export const defaultLanguage = 'en';
export const availLanguages = ["sr", "en"];
export const APIUrl = 'http://localhost:3000/api';

export const themes = {
  bluePink: {
    palette : {
      primary: {
        light: '#448Aff',
        main: '#2196f3',
        dark: '#2962ff',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff4081',
        main: '#f50057',
        dark: '#d81b60',
        contrastText: '#fff'
      }
    },
    globalColors : {
      success: '#00e676',
      error: '#f44336'
    }
  },
  luxury: {
    palette : {
      primary: {
        light: '#d0ddd5',
        main: '#c5d5cb',
        dark: '#9fa8a3',
        contrastText: '#fff'
      },
      secondary: {
        light: '#e5e3d3',
        main: '#e3e0cf',
        dark: '#ccc9ba',
        contrastText: '#fff'
      }
    },
    globalColors : {
      success: '#00e676',
      error: '#a6607c'
    }
  }
}

export const availThemes = Object.keys(themes); 
export const defaultTheme = availThemes[0];


