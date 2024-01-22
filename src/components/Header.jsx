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
                    <a href='#liste-articles'>
                        <button className='mr-5 btn btn-primary'>
                                <span>Liste des articles</span>
                        </button>
                    </a>
                    <button className='mr-5 btn btn-primary'>
                        <span>Contact</span>
                    </button>

                </lu>
            </nav>
        </header>
    )
}

export default Header;