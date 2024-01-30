import styles from './Header.module.scss';
import logo from '/images/logo-banner.png';

function Header (){
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill">
                <a href='/'>
                <img src={logo} alt="Logo de LADC Evenements"/>
                </a>
            </div>

            <nav>
            <i className={`${styles.menuBurger} fa-solid fa-bars mr-15`}></i>
                <lu className={styles.navLinks}>
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

                </lu>
            </nav>
        </header>
    )
}

export default Header;