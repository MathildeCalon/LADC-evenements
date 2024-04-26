import styles from './App.module.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainComponents/MainPage.jsx';
import LivredOr from './components/mainComponents/LivredOr.jsx';
import GaleriePhotos from './components/mainComponents/GaleriePhotos.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/livredor" Component={LivredOr} />
        <Route exact path="/galeriephotos" Component={GaleriePhotos} />
        <Route exact path="/" Component={MainPage} />
      </Routes>
    </Router>
  )
}

export default App
