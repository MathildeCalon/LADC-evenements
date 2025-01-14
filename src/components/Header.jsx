import styles from './Header.module.scss';
import { useState, useEffect, useRef } from 'react';
import Cart from './Cart';

function Header ({currentCart, removeFromCart}){
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
            <div className={`${styles.logoHeader} flex-fill`}>
                <a href='/'>
                <img src='/images/logo_2025_detoure.jpeg'></img>
                </a>
            </div>

            <nav>
                <div className={`${styles.navBurger} mr-15`} onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"/>
                </div>
                <ul className={`${styles.navLinks} ${isMenuOpen ? 'show' : ''}`} ref={menuRef}>
                    <a href="/" onClick={toggleMenu}>
                        <button className='mr-15 btn btn-primary'>
                        Présentation
                        </button>
                    </a>
                    <a href='/articles' onClick={toggleMenu}>
                        <button className='mr-15 btn btn-primary'>
                        Liste des articles
                        </button>
                    </a>
                    <a href='/contact'  onClick={toggleMenu}>
                        <button className='mr-15 btn btn-primary'>
                        Contact
                        </button>
                    </a>
                    <button className={`btn btn-primary mr-15`} onClick={toggleCartPopUp}><i className="fa-solid fa-cart-shopping mr-5"/>Mon panier 
                    <span className={`${styles.cartLength} justify-content-center align-items-center ml-5`}>{currentCart.length}</span></button>
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