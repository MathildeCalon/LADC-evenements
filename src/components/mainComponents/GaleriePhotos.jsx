import styles from './GaleriePhotos.module.scss';
import galerie from '../../assets/galerie.json';
import PhotoTheme from '../PhotoTheme.jsx';

const GaleriePhotos = () => {
    const themes = []; 
    galerie.map((el) => 
        {if(!themes.includes(el.theme)){
            themes.push(el.theme);
        }}
    );

    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <header className={`${styles.header} d-flex flex-row align-items-center`}>
                <div className="flex-fill">
                    <a href='/'>
                    <h1>LADC Evénements</h1>
                    </a>
                </div>

                <nav>
                    <a href='/'>
                    <button className={`btn btn-primary mr-15`}>Accueil</button>
                    </a>
                </nav>
            </header>

            <div className='flex-fill container p-20'>
                <h2>Galerie Photos</h2>
                    {themes.map(el => (
                    <PhotoTheme theme = {el}></PhotoTheme>
                    ))}
            </div>
        </div>
    )
}

export default GaleriePhotos;