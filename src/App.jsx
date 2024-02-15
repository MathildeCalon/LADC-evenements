import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {
      // PANIER
      const [currentCart, setCurrentCart] = useState([]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header currentCart={currentCart}/>
      <Content addToCart={(article) => setCurrentCart([...currentCart, article])}/>
      <Footer />
    </div>
  )
}

export default App
