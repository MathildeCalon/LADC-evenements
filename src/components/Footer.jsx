import styles from './Footer.module.scss';
import anthony from '/images/anthony_coucke.png';

function Footer () {
    return (
        <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-5`}>
            <div id="footer-contact" className="flex-fill">
                <img src={anthony} alt="Photo de Anthony Coucke"></img>
                <ul>
                    <li>Contactez nous !</li>
                    <li>07.78.24.59.38</li>
                    <li>ladcevenements@gmail.com</li>
                </ul>
            </div>
            
            <div className="d-flex flex-column mr-15">
                <div className='mt-5'>
                    <a href="https://www.facebook.com/profile.php?id=61552552079121"><i className="fa-brands fa-facebook mr-5"></i>
                    <span className='mr-5'>Facebook</span></a>
                </div>

                <div className='mt-5'></div>
                    <a href="https://www.instagram.com/ladcevenements?igsh=MWN3Z3c0azhvaXV6dg=="><i className="fa-brands fa-instagram mr-5"></i>
                    <span className='mr-5'>Instagram</span></a>
                    </div>

                    <div className='mt-5'>
                    <a href="https://www.linkedin.com/in/mathildecalon/" target="blank">
                    <span className={styles.webdeveloppement}><i className="fa-solid fa-code mr-5"></i>Mathilde Calon</span></a>
            </div>

        </footer>
    )
}

export default Footer;