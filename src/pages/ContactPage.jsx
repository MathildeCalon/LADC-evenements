import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HubspotForm from 'react-hubspot-form';
import styles from '../components/Content.module.scss';

function ContactPage({currentCart, removeFromCart}) {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header currentCart={currentCart} removeFromCart={removeFromCart}/>
        <div id="contact" className={`${styles.contact}  mb-50 p-20`}>
            <h2>Contactez nous !</h2>
                <p className="mt-50">Envoyez-nous directement un message via le formulaire :</p>
                <HubspotForm
                    portalId="143994085"
                    formId="412785c6-3ab7-4a26-a788-ccda2f4f13a8"
                    loading={<div>Chargement...</div>}
                />
        </div>
        <Footer />
    </div>
  );
}

export default ContactPage;