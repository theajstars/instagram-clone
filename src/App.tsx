import { Button, MantineProvider, createTheme } from "@mantine/core";
import React from "react";
import "@mantine/core/styles.css";

function App() {
  const theme = createTheme({});
  return (
    <MantineProvider theme={theme}>
      <h1>Hello World</h1>
      <Button>Ballsacks</Button>
    </MantineProvider>
  );
}

export default App;
