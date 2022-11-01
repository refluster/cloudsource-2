import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import { customTheme } from './styles/theme';
import Home from './pages/home';
import Login from './pages/login';
import Projects from './pages/projects';

//import awsExports from './aws-exports';
//Amplify.configure(awsExports);

import {   AmplifyProvider,
  Authenticator,
  Button,
  Flex,
  Image,
  Text,
  View,
withAuthenticator, Heading } from '@aws-amplify/ui-react';

//import aws_exports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
//Amplify.configure(aws_exports);

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
