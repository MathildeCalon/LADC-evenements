import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {
  // AJOUT AU PANIER
  const [currentCart, setCurrentCart] = useState([]);
  const addToCart = (article) => {
    setCurrentCart([...currentCart, article]);
  };
  // SUPPRIMER DU PANIER  
  const removeFromCart = (articleToRemove) => {
    const updatedCart = currentCart.filter((article) => article !== articleToRemove);
    setCurrentCart(updatedCart);
    return currentCart;
  };

  // POUR OUVRIR LA POPUP NEWSLETTER
  const [newsIsOpen, setNewsIsOpen] = useState(false);
  const togglePopup = () => {
      setNewsIsOpen(!newsIsOpen);
  };

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header currentCart={currentCart} removeFromCart={removeFromCart} togglePopup={togglePopup} newsIsOpen={newsIsOpen}/>
      <Content addToCart={addToCart} togglePopup={togglePopup} newsIsOpen={newsIsOpen}/>
      <Footer />
    </div>
  )
}

export default App
