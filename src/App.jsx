import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {
      // PANIER
      const [currentCart, setCurrentCart] = useState([]);
      const addToCart = (article) => {
        setCurrentCart([...currentCart, article]);
      }
      const removeFromCart = (articleToRemove) => {
        const updatedCart = currentCart.filter((article) => article !== articleToRemove);
        setCurrentCart(updatedCart);
        return currentCart;
      }

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header currentCart={currentCart} removeFromCart={removeFromCart}/>
      <Content addToCart={addToCart}/>
      <Footer />
    </div>
  )
}

export default App
