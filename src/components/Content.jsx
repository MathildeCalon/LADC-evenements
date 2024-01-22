import styles from './Content.module.scss';
import Articles from './Article';

function Content() {
    return (
        <div className='flex-fill container p-20'>
            <h1 className="my-30 d-flex justify-content-center">LADC ÉVÉNEMENTS : Votre Événement, Notre Engagement.</h1>
            <div id='liste-articles' className={`card p-20 ${styles.contentCard}`}>
                <div className={styles.grid}>
                    <Articles />
                </div>
            </div>
        </div>
    )
}

export default Content;