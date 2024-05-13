import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC222',
    },
    secondary: {
      main: '#716E6E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Franklin Gothic Demi, sans-serif',
      fontWeight: 'bold',
      fontSize: '2.5rem',
      lineHeight: '3rem',
      color: '#FFFFFF',
      
    },
    h2: {
      fontFamily: 'Roboto Bold, sans-serif',
      fontWeight: 'bold',
      fontSize: '2rem',
      lineHeight: '2.5rem',
      color: '#FFFFFF',
      
    },
    subtitle1: {
      fontFamily: 'Roboto Medium, sans-serif',
      fontWeight: 'medium',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      color: '#FFFFFF',
      
    },
    body1: {
      fontFamily: 'Roboto Regular, sans-serif',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: '#FFFFFF',
      
    },
    
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, 
});

export default darkTheme;
