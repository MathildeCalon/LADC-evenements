import React from 'react';
import styles from './Popup.module.scss';

const Popup = props => {
return (
    <div className={styles.popupBox}>
        <div className={styles.box}>
        <i className={`fa-regular fa-circle-xmark ${styles.btnClose}`} onClick={props.handleClose}></i>
        {props.content}
        </div>
    </div>)
}

export default Popup;