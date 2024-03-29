import styles from './Article.module.scss';
import jsonData from '../assets/articles.json';


export default function Articles ({addToCart}){
    return(
        jsonData.map((article) => (
            <div className={`${styles.article} d-flex flex-column align-items-center`} key={article.id}>
                {article.photo &&
                <div className={`${styles.imageContainer} d-flex`}>
                    <img src={`/images/${article.photo}`} alt={article.titre} className='m-20'/>
                </div>}
                <div className={`${styles.articleTitle} d-flex flex-column justify-content-center align-items-center`}>
                    <h3>{article.titre}</h3>
                    {article.description &&
                        <p className={styles.description}>{article.description}</p>
                    }
                </div>
                <div className={`${styles.addCart} d-flex align-items-center justify-content-center py-10 my-15`} onClick={()=>{addToCart(article)}} id={`btn${article.id}`}>
                    <i className='fa-solid fa-cart-plus mr-15'/>
                    <p>Ajouter au panier - {article.prix}€</p>  
                </div>

            </div>
        ))
    )
};