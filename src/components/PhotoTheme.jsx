import galerie from '../assets/galerie.json';

const PhotoTheme = ({theme}) => {
    const themes = galerie.filter(el => el.theme === theme);

    return (
        <div>
            <h3>{theme}</h3>
            {themes.map(item => (
                <div key={item.id}>
                    <img src={`/images/galerie/${item.url}`} alt={item.description} />
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default PhotoTheme;