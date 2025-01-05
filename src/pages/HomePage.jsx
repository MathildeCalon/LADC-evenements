import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../components/Content.jsx';
import styles from '../App.module.scss';
import { useState, useEffect } from 'react';
import 'animate.css';

function HomePage(currentCart, removeFromCart){
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header currentCart={currentCart} removeFromCart={removeFromCart} />
        <Content />
        <Footer />
      </div>
    )
}

export default HomePage;