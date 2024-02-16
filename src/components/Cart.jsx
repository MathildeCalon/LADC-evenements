import styles from './Cart.module.scss';
import logo from '/images/logo-banner.png';

const Cart = ({currentCart, handleClose, removeFromCart}) => {
    return (
        <div className={styles.cartPopUp}>
            <div className={`${styles.box}`}>
                <i className={`fa-regular fa-circle-xmark ${styles.btnClose}`} onClick={handleClose}></i>
                <div className={`d-flex flex-column justify-content-center align-items-center p-20`}>
                    <img src={logo} alt="Logo de LADC Evenements"/>
                    {currentCart.map((article) => (
                        <div className={styles.article} key={article.id}>
                            {article.photo &&
                            <div className={`${styles.imageContainer} d-flex`}>
                                <img src={`/images/${article.photo}`} alt={article.titre} className='m-20'/>
                            </div>}
                            <div className={`${styles.articleTitle} d-flex flex-column justify-content-center align-items-center`}>
                                <h3>{article.titre} {article.prix}€</h3>
                                <i className="fa-solid fa-trash-can" onClick={()=>{removeFromCart(article)}}></i>
                                {article.description &&
                                    <p className={styles.description}>{()=>(article.description)}</p>
                                }
                            </div>
                        </div>
                    ))}
                    <div> AJOUTER CALENDRIER </div>
                    <button> AJOUTER BOUTON D'ENVOI </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;