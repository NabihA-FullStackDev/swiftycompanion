import { StyleSheet } from "react-native";


const COLORS = {
    primary: "#292d38",
    secondary: "#4180db",
  
    gray: "#7d7d7d",
  
    white: "#fafafa",
    lightWhite: "#FFFFFF",
  };
    
  const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  };
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    bg: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    screen: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  export { COLORS, SIZES, styles };
  