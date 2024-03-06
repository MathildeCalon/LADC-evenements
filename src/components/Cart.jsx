import styles from './Cart.module.scss';
import logo from '/images/logo-banner.png';
import 'animate.css';

const Cart = ({currentCart, handleClose, removeFromCart}) => {
    const totalSum = currentCart.reduce((acc, article) => acc + article.prix, 0);
    
    return (
        <form>
        <div className={styles.cartPopUp}>
            <div className={`${styles.box}`}>
                <i className={`fa-regular fa-circle-xmark ${styles.btnClose}`} onClick={handleClose}></i>
                <div className={`${styles.cartContainer} d-flex flex-column justify-content-center align-items-center p-20`}>
                    <img src={logo} alt="Logo de LADC Evenements"/>

                        <h3>1. Vos articles souhaités :</h3>

                        {currentCart.length === 0 && (
                        <p className={`${styles.noArticle} p-20`}>Aucun article dans votre panier.</p>)}

                        {currentCart.map((article) => (
                            <div className={styles.article} key={article.id}>
                                <div className={`${styles.articleResume} d-flex align-items-center`}>
                                {article.photo &&
                                    <div className={`${styles.imageContainer} d-flex`}>
                                        <img src={`/images/${article.photo}`} alt={article.titre} className='m-20'/>
                                    </div>}
                                    <div className={`${styles.articleTitle} d-flex flex-column justify-content-center align-items-center`}>
                                        <h3>{article.titre}</h3>
                                        <p>{article.prix}€</p>
                                    </div>
                                    <i className="fa-solid fa-trash-can mr-15" onClick={()=>{removeFromCart(article)}}></i>
                                </div>
                            </div>
                        ))}
                        <p className={styles.totalSum}>Montal total : {totalSum}€</p>


                    {currentCart.length > 0 && (
                        <>
                    <div className='d-flex flex-column my-15'>
                        <h3 className='mb-10'>2. Votre date :</h3>
                        <label for="start">Réservation souhaitée :</label>
                        <input type="date" id="start" name="booking-start" className={styles.startDate} required/>
                    </div>

                    <div className={styles.contactDetails}>
                        <h3 className='mb-10'>3. Vos coordonnées :</h3>
                        <label for="prenom">Votre prénom :</label>
                        <input type='text' id='prenom' name='prenom' required className='mb-10'/>

                        <label for="telephone">Votre numéro de téléphone :</label>
                        <input type='tel' id='telephone' name='telephone' pattern='[0-9]{10}' required className='mb-10'/>

                        <label for="email">Votre adresse email :</label>
                        <input type='email' id='email' name='email' required className='mb-10'/>
                    </div>

                    {currentCart.length > 0 && ( 
                    <button className='btn btn-primary btn-big'>Envoyez votre demande de réservation !</button>
                    )}
                </>
                )}
                </div>
            </div>
        </div>
        </form>
    )
}

export default Cart;