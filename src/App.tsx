import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MantineProvider, createTheme } from "@mantine/core";

import Login from "./Pages/Login";

import "@mantine/core/styles.css";

import "./index.scss";

function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
