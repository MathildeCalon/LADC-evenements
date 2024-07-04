import galerie from '../assets/galerie.json';
import styles from './PhotoTheme.module.scss';

const PhotoTheme = ({theme}) => {
    const themes = galerie.filter(el => el.theme === theme);

    return (
        <div>
            <h3>{theme}</h3>
            <div className="d-flex flex-row">
            {themes.map(item => (
                <div key={item.id} >
                    <img src={`/images/galerie/${item.url}`} alt={item.description} className={styles.picGalery}/>
                    <p>{item.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default PhotoTheme;