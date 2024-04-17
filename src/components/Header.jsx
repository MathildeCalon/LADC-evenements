import styles from './Header.module.scss';
import logo from '/images/logo-banner.png';
import { useState, useEffect, useRef } from 'react';
import Cart from './Cart';
import Popup from './Popup';

function Header ({currentCart, removeFromCart, togglePopup, newsIsOpen}){
    // POUR OUVRIR LE PANIER
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const toggleCartPopUp = () => {
        setCartIsOpen(!cartIsOpen);
        if(isMenuOpen){
            toggleMenu();
        }
    };

    // POUR OUVRIR LE MENU RESPONSIVE
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // POUR FERMER LE MENU RESPONSIVE EN CLIQUANT A L'EXTERIEUR
    let menuRef = useRef();

    useEffect(()=> {
        let handler = (event)=> {
            if(!menuRef.current.contains(event.target)){
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
    })

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill">
                <a href='/'>
                <img src={logo} alt="Logo de LADC Evenements"/>
                </a>
            </div>

            <nav>
                <div className={`${styles.navBurger} mr-15`} onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"/>
                </div>
                <ul className={`${styles.navLinks} ${isMenuOpen ? 'show' : ''}`} ref={menuRef}>
                    <a href="#presentation" onClick={toggleMenu}>
                        <button className='mr-15 btn btn-primary'>
                        Présentation
                        </button>
                    </a>
                    <button className='mr-15 btn btn-primary' onClick={togglePopup}>
                    Newsletter
                    </button>
                    <a href='#liste-articles' onClick={toggleMenu}>
                        <button className='mr-15 btn btn-primary'>
                        Liste des articles
                        </button>
                    </a>
                    <a href='#contact'  onClick={toggleMenu}>
                        <button className='mr-15 btn btn-primary'>
                        Contact
                        </button>
                    </a>
                    <button className={`btn btn-primary mr-15`} onClick={toggleCartPopUp}><i className="fa-solid fa-cart-shopping mr-5"/>Mon panier - 
                    <span className={`${styles.cartLength} justify-content-center align-items-center ml-5`}>{currentCart.length}</span></button>
                </ul>
                {cartIsOpen && <Cart
                currentCart={currentCart}
                removeFromCart={removeFromCart}
                handleClose={toggleCartPopUp}
                />}
                </nav>
            
                {newsIsOpen && <Popup
                handleClose={togglePopup}
                />}
        </header>
    )
}

export default Header;