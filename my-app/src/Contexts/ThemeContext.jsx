// import React, { createContext } from "react";

// export const ThemeContext = createContext();

// function ThemeContextProvider({ children }) {

//   const toggleTheme = () => {
//     setIsAuth(!isDark);
//   };

//   return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
// }

// export default ThemeContextProvider;
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
const { colorMode, toggleColorMode } = useColorMode();
colorMode = "light" / "dark";
// toggleColorMode() between light & dark
// useColorModeValue
