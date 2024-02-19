import styles from './Header.module.scss';
import logo from '/images/logo-banner.png';
import { useState } from 'react';
import Cart from './Cart'

function Header ({currentCart, removeFromCart}){
    // POUR OUVRIR LE PANIER
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const toggleCartPopUp = () => {
        setCartIsOpen(!cartIsOpen);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill">
                <a href='/'>
                <img src={logo} alt="Logo de LADC Evenements"/>
                </a>
            </div>

            <nav>
                <ul className={styles.navLinks}>
                    <a href="#presentation">
                        <button className='mr-15 btn btn-primary'>
                        Présentation
                        </button>
                    </a>
                    <a href='#liste-articles'>
                        <button className='mr-15 btn btn-primary'>
                        Liste des articles
                        </button>
                    </a>
                    <a href='#contact'>
                        <button className='mr-15 btn btn-primary'>
                        Contact
                        </button>
                    </a>
                    <button className={`${styles.cart} btn btn-primary mr-15`} onClick={toggleCartPopUp}><i className="fa-solid fa-cart-shopping mr-5"/>Mon panier</button>
                </ul>
                {cartIsOpen && <Cart
                currentCart={currentCart}
                removeFromCart={removeFromCart}
                handleClose={toggleCartPopUp}
                />}
                </nav>
            
        </header>
    )
}

export default Header;