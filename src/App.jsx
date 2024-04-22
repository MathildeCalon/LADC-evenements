import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import styles from './App.module.scss';
import { useState } from 'react';
import 'animate.css';

function App() {
  const [currentCart, setCurrentCart] = useState([]);

  // AJOUT AU PANIER
  const addToCart = (article) => {
    const check = currentCart.find((item) => item.id === article.id);
    if(!check){
    if(article.quantité_max > 1){
      const quantity = document.getElementById(`quantity-${article.id}`);
      article.quantity = quantity ? quantity.value : 1;
      article.totalPrice = article.prix * article.quantity;
    } else {
      article.quantity = 1;
      article.totalPrice = article.prix;
    }
      setCurrentCart([...currentCart, article]);
      console.log(article);

    // CONFIRMATION DE L'AJOUT AU PANIER
    const clickedBtn = document.getElementById(`btn${article.id}`);
    clickedBtn.classList.add('clicked');
    setTimeout(() => {
      clickedBtn.classList.remove('clicked');
    }, 3000);
  }
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
