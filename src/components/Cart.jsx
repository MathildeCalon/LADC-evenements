import styles from './Cart.module.scss';
import logo from '/images/logo-banner.png';
import { currentCart} from './Article';

const Cart = props => {
    // POUR RETIRER DES ARTICLES AU PANIER
    const removeFromCart = (article) => {
        const indexArticle = currentCart.indexOf(article);
        const removedArticle = currentCart.splice(indexArticle, 1);
        console.log(`Article:`, removedArticle, `nouveau tableau`, currentCart);
    };

    console.log(currentCart);

    return (
        <div className={styles.cartPopUp}>
            <div className={`${styles.box}`}>
                <i className={`fa-regular fa-circle-xmark ${styles.btnClose}`} onClick={props.handleClose}></i>
                <div className={`d-flex flex-column justify-content-center align-items-center p-20`}>
                    <img src={logo} alt="Logo de LADC Evenements"/>
                    {currentCart.map((article) => {
                        <div className={styles.article} key={article.id}>
                        {article.photo &&
                        <div className={`${styles.imageContainer} d-flex`}>
                            <img src={`/images/${article.photo}`} alt={article.titre} className='m-20'/>
                        </div>}
                        <div className={`${styles.articleTitle} d-flex flex-column justify-content-center align-items-center`}>
                            <h3>{article.titre} {article.prix}€</h3>
                            <i className="fa-solid fa-cart-plus" onClick={()=>{removeFromCart(article)}}></i>
                            {article.description &&
                                <p className={styles.description}>{article.description}</p>
                            }
                        </div>
                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;