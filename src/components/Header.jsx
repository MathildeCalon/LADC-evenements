import styles from './Header.module.scss';
import logo from '../assets/images/logo-vectorise.png';

function Header (){
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill ">
                <i className="fa-solid fa-list-ul mr-15"></i> 
                <a href='/'>
                <img src={logo} alt="Logo de LADC Evenements"/>
                </a>
            </div>

            <nav>
                <ul>
                    <button className='mr-5 btn btn-primary'>
                    <i className="fa-solid fa-basket-shopping mr-5"></i> 
                    <span>Panier</span></button>
                    <button className='mr-5 btn btn-primary'><i class="fa-solid fa-arrow-right-to-bracket mr-5"></i>
                    <spans>Connexion</spans></button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;