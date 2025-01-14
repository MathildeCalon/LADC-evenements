import React from 'react';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'animate.css';

function App() {
  const [currentCart, setCurrentCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // SAUVEGARDER LE PANIER DANS LOCALSTORAGE A CHAQUE MISE A JOUR
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }, [currentCart]);

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
      const updatedCart = [...currentCart, article];
      setCurrentCart(updatedCart);

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
    const removedArticle = document.getElementById(`article${articleToRemove.id}`);
    removedArticle.classList.add('animate__animated', 'animate__bounceOut');

    setTimeout(() => {
      const updatedCart = currentCart.filter((article) => article !== articleToRemove);
      setCurrentCart(updatedCart);
    }, 1000);
    return currentCart;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" 
        element={<HomePage currentCart={currentCart} removeFromCart={removeFromCart}/>} />
        <Route exact path="/articles" 
        element={<ArticlesPage addToCart={addToCart} currentCart={currentCart} removeFromCart={removeFromCart}/>} />
        <Route exact path="/contact"
        element={<ContactPage currentCart={currentCart} removeFromCart={removeFromCart}/>} />
      </Routes>
    </Router>
  )
}

export default App
