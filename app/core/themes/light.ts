import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFC222",
    },
    secondary: {
      main: "#716E6E",
    },
    text: {
      primary: "#000000",
      secondary: "#707070",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Franklin Gothic Demi, sans-serif",
      fontWeight: "bold",
      fontSize: "2.5rem",
      lineHeight: "3rem",
      color: "#000000",
      
    },
    h2: {
      fontFamily: "Roboto Bold, sans-serif",
      fontWeight: "bold",
      fontSize: "2rem",
      lineHeight: "2.5rem",
      color: "#000000",
      
    },
    subtitle1: {
      fontFamily: "Roboto Medium, sans-serif",
      fontWeight: "medium",
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      color: "#000000",
      
    },
    body1: {
      fontFamily: "Roboto Regular, sans-serif",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: "#000000",
      
    },
   
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, 
});

export default lightTheme;
