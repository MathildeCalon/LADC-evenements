import styles from './Content.module.scss';

import Articles from './Article';
import React, { useState, useEffect } from 'react';
import HubspotForm from 'react-hubspot-form';
import Popup from './Popup';


function Content({addToCart, togglePopup, newsIsOpen}) {
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
                        <Articles addToCart={addToCart}/>
                    </div>
                </div>
            </div>

            <div id="contact" className={`${styles.contact} mb-50 p-20`}>
                <h2>Contactez nous !</h2>
                    <p className="mt-50">Envoyez-nous directement un message via le formulaire :</p>
                    <HubspotForm
                        portalId="143994085"
                        formId="412785c6-3ab7-4a26-a788-ccda2f4f13a8"
                        loading={<div>Chargement...</div>}
                    />
            </div>

            <div className={`${styles.sideBar} p-10`} onClick={togglePopup}>
            NEWSLETTER
            </div>

            {newsIsOpen && <Popup
            handleClose={togglePopup}
            />}
        </div>
    )
}

export default Content;