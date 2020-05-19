import React from 'react';
import MainRoute from './MainRoute';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation.component';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <MainRoute/>
    </BrowserRouter>
  );
}

export default App;
