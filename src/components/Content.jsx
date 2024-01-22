import styles from './Content.module.scss';
import Article from './Article';

function Content() {
    return (
         <div className="flex-fill container p-20">
            <h1 className="my-30">LADC ÉVÉNEMENTS : Votre Événement, Notre Engagement.</h1>
            <div className={`card p-20 ${styles.contentCard}`}>
            <div className={styles.grid}>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                </div>
            </div>
        </div>
    )
}

export default Content;