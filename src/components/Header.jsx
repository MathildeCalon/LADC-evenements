import styles from './Header.module.scss';
import logo from '/images/logo-vectorise.png';

function Header (){
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill ">
                <a href='/'>
                <img src={logo} alt="Logo de LADC Evenements"/>
                </a>
            </div>

            <nav>
                <lu>
                    <a href="#presentation">
                        <button className='mr-5 btn btn-primary'>
                        Présentation
                        </button>
                    </a>
                    <a href='#liste-articles'>
                        <button className='mr-5 btn btn-primary'>
                        Liste des articles
                        </button>
                    </a>
                    <a href='#contact'>
                        <button className='mr-5 btn btn-primary'>
                        Contact
                        </button>
                    </a>

                </lu>
            </nav>
        </header>
    )
}

export default Header;