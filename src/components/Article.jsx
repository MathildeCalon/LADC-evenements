import styles from './Article.module.scss';
import jsonData from '../assets/articles.json';

function Articles(){
    return(
        jsonData.map((article) => (
            <div className={styles.article} key={article.id}>
                {article.photo &&
                <div className={`${styles.imageContainer} d-flex`}>
                    <img src={`/images/${article.photo}`} alt={article.titre} className='m-20'/>
                </div>}
                <div className={` ${styles.articleTitle} d-flex flex-row justify-content-center align-items-center`}>
                    <h3>{article.titre} {article.prix}€</h3>
                </div>
            </div>
        ))
    )
};

export default Articles;