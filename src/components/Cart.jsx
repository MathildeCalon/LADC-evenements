import styles from './Cart.module.scss';
import logo from '/images/logo-banner.png';

const Cart = ({currentCart, handleClose, removeFromCart}) => {
    const totalSum = currentCart.reduce((acc, article) => acc + article.prix, 0);
    console.log(totalSum);
    
    return (
        <div className={styles.cartPopUp}>
            <div className={`${styles.box}`}>
                <i className={`fa-regular fa-circle-xmark ${styles.btnClose}`} onClick={handleClose}></i>
                <div className={`d-flex flex-column justify-content-center align-items-center p-20`}>
                    <img src={logo} alt="Logo de LADC Evenements"/>
                    <div className='d-flex my-15'>
                        <label for="start">Date de réservation souhaitée :</label>
                        <input type="date" id="start" name="booking-start" className={styles.startDate}/>
                    </div>
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
                    {currentCart.length === 0 && (
                    <p className={`${styles.noArticle} p-20`}>Aucun article dans votre panier.</p>)}

                    {currentCart.length > 0 && ( 
                    <button className='btn btn-primary btn-big'>Envoyez votre demande de réservation !</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart;