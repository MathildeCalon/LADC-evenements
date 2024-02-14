import styles from './Article.module.scss';
import jsonData from '../assets/articles.json';


export const currentCart = [];
export default function Articles (){
    // POUR AJOUTER DES ARTICLES AU PANIER

    const addToCart = (article) => {
        currentCart.push(article);
        console.log(currentCart);
    }


    return(
        jsonData.map((article) => (
            <div className={styles.article} key={article.id}>
                {article.photo &&
                <div className={`${styles.imageContainer} d-flex`}>
                    <img src={`/images/${article.photo}`} alt={article.titre} className='m-20'/>
                </div>}
                <div className={`${styles.articleTitle} d-flex flex-column justify-content-center align-items-center`}>
                    <h3>{article.titre} {article.prix}€</h3>
                    <i className="fa-solid fa-cart-plus" onClick={()=>{addToCart(article)}}></i>
                    {article.description &&
                        <p className={styles.description}>{article.description}</p>
                    }
                </div>
            </div>
        ))
    )
};