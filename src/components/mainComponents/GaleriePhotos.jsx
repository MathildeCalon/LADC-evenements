import styles from './GaleriePhotos.module.scss';
import galerie from '../../assets/galerie.json';

const GaleriePhotos = () => {
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
                {galerie.map((photo) => (
                    <div className={`${styles.element} d-flex justify-content-center align-items-center`}>
                        <div className={styles.imageContainer}>
                            <img src={`/images/galerie/${photo.url}`} alt={photo.description} className='m-20' style={{width: '100%'}}/>
                        </div>
                        <p>
                            {photo.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GaleriePhotos;