import React from 'react';
import styles from './Popup.module.scss';
import HubspotForm from 'react-hubspot-form';
import logo from '/images/logo-banner.png';

const Popup = props => {
return (
    <div className={styles.popupBox}>
        <div className={`${styles.box}`}>
            <i className={`fa-regular fa-circle-xmark ${styles.btnClose}`} onClick={props.handleClose}></i>
            <div className='d-flex flex-column justify-content-center align-items-center p-20'>
                <img src={logo} alt="Logo de LADC Evenements"/>
                <h3 className='m-10'>Abonnez-vous à notre newsletter et ne manquez aucune information :</h3>
                <div className={styles.newsletterForm}>
                    <HubspotForm
                            portalId="143994085"
                            formId="684d35af-1426-4cfa-ab01-086d228032db"
                            onSubmit={() => console.log('Form submitted!')}
                            onReady={(form) => console.log('Form ready!')}
                            loading={<div>Loading...</div>}
                        />
                </div>
            </div>
        </div>
    </div>)
}

export default Popup;