import './App.css';
import React, { useState } from "react";
import PlayoffChallengeRoutes from './navigation/PlayoffChallengeRoutes';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

function App() {
  const [mode] = useState('dark');

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: '#303030',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <PlayoffChallengeRoutes/>
      </ThemeProvider>
    </>
  );
}

export default App;
