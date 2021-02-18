import React from 'react';
import AppContainer from './pages/MainStackNavigator/index';
import Container from "./context/Container";

export default function App() {
  return (   
  <Container>
    <AppContainer />
  </Container>
  );
}