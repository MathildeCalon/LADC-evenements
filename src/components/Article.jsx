import styles from './Article.module.scss';
import bonbon from '../assets/images/bonbons.png';

function Article(){
    return(
        <div className={styles.article}>
            <div className={styles.imageContainer}>
                <img src={bonbon} alt='Sachet de bonbons'/>
            </div>
            <div className={` ${styles.articleTitle} d-flex flex-row justify-content-center align-items-center`}>
                <h3 >Sachet de bonbons</h3>
            </div>
        </div>
    )
};

export default Article;