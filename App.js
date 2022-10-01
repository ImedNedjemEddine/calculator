import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { CalculatorScreen } from './src/features/calculator/screens/calculator.screen';
import { theme } from "./src/infrastructure/theme";
export default function App(){
   return(
    <ThemeProvider theme={theme}>
        <CalculatorScreen/>
    </ThemeProvider>

  )
}
