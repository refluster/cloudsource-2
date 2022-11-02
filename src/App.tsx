import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import { RequireAuth } from './components/require-auth';

import { ThemeProvider } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import { customTheme } from './styles/theme';
import Home from './pages/home';
import Login from './pages/login';
import Projects from './pages/projects';
import ProjectDetail from './pages/project';

import "@aws-amplify/ui-react/styles.css";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<RequireAuth><Projects /></RequireAuth>} />
          <Route path="/project/:id" element={<RequireAuth><ProjectDetail /></RequireAuth>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
