import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/navigation";
import { theme } from "./src/theme";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </Fragment>
  );
}
