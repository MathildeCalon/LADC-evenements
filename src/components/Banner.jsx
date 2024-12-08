import styles from './Banner.module.scss';
import { useState, useEffect } from 'react';

export default function Banner () {
    const [currentImage, setCurrentImage] = useState(0);
    const banderole = [
        'banner_moment.jpeg',
        'banner_asso_15.jpeg',
        'banner_bartop.jpeg',
    ];

    useEffect(() => {
        // CHANGER D'IMAGE TOUTES LES 5 SECONDES
    const interval = setInterval(() => {
        setCurrentImage((currentImage + 1) % banderole.length);
    }, 5000);
    return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
    }, [currentImage, banderole]);

    return (
        <div className='d-flex flex-column p-20'>
            <div className={`${styles.banderole}`}>
            {banderole.map((image, index) => (
                    <img
                        key={index}
                        src={`/images/${image}`}
                        alt={`Bandeau promotionnel ${index}`}
                        style={{ opacity: index === currentImage ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                    />
                ))}
            </div>
        </div>
    )
}