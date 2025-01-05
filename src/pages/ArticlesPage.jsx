import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Articles from '../components/Article.jsx';
import styles from '../components/Content.module.scss';
import 'animate.css';

function ArticlesPage({currentCart, addToCart, removeFromCart}){
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header currentCart={currentCart} removeFromCart={removeFromCart}/>
                <div className={styles.mainDiv}>
                    <h2 id='liste-articles'>Nos articles</h2>
                    <div className={`card p-20 ${styles.contentCard}`}>
                        <div className={styles.grid}>
                            <Articles addToCart={addToCart}/>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default ArticlesPage