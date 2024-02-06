import styles from './Content.module.scss';
import Popup from './Popup';
import Articles from './Article';
import React, { useState } from 'react';

function Content() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex-fill container p-20'>
            <h1 className="my-100 d-flex justify-content-center">LADC ÉVÉNEMENTS : <br/>Votre Événement, Notre Engagement.</h1>
            <h2 id="presentation" className="d-flex">Bienvenue chez LADC ÉVÉNEMENTS.</h2>
            <div className={`${styles.presentation} d-flex flew-column flex-fill mb-20`}>
                <div className={`${styles.textPresentation} m-10 flex-column`}>
                    <p>À Gondecourt et ses environs, nous sommes votre partenaire incontournable pour faire de vos événements des moments exceptionnels. Chez LADC ÉVÉNEMENTS, nous mettons à votre disposition un vaste choix de matériel événementiel à la location, que ce soit pour des associations ou des particuliers, le tout à des tarifs très abordables.
                    </p>
                    <p>LADC ÉVÉNEMENTS s'engage à rendre votre expérience de location simple, agréable et sans tracas. Nous sommes là pour vous conseiller et vous accompagner à chaque étape, assurant ainsi le succès de votre événement. De plus, nous proposons notre présence lors de votre événement, vous laissant ainsi libre de savourer pleinement chaque moment.
                    </p>
                </div>
                <div className={`${styles.imgAnthony} d-flex`}>
                    <img src="/images/anthony_coucke_framed.png" alt="Photo de Anthony Coucke"/>
                </div>
            </div>

            <div className='my-100'>
                <h2 id='liste-articles'>Nos articles</h2>
                <div className={`card p-20 ${styles.contentCard}`}>
                    <div className={styles.grid}>
                        <Articles />
                    </div>
                </div>
            </div>

            <div id="contact" className={`${styles.contact} flex-fill mb-50 p-20`}>
                <h2>Contactez nous !</h2>
                <ul>
                    <p>Pour toute demande de réservation ou pour toute demande de renseignement, contactez Anthony Coucke :</p>
                    <li className="my-15"><i className="fa-solid fa-phone mr-5"></i>07.78.24.59.38</li>
                    <li><i className="fa-solid fa-at mr-5"></i>ladcevenements@gmail.com</li>
                </ul>
            </div>

            <div className={`${styles.sideBar} p-10`} onClick={togglePopup}>
            NEWSLETTER
            </div>

            {isOpen && <Popup
            handleClose={togglePopup}
            content={<div className='d-flex flex-column justify-content-center align-items-center p-20'>
                <h3 className='m-10'>Abonnez-vous à notre newsletter et ne manquez aucune information :</h3>
                <form action="http://localhost:3000/newsletter" method="post">
                    <label for="newsletter" className='m-10'>Votre adresse email</label>
                    <input type="email" id="newsletter" name="newsletter"/>
                    <button type='submit' id='validateBtn' className='btn btn-primary m-10'>S'INSCRIRE</button>
                </form>
            </div>}/>}

        </div>
    )
}

export default Content;