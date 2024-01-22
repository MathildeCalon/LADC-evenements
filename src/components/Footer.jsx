import styles from './Footer.module.scss';
import anthony from '../assets/images/anthony_coucke.png';

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
            
            <div id="social-media">
                <a href="https://www.facebook.com/profile.php?id=61552552079121"><i className="fa-brands fa-facebook"></i>
                <span className='mr-5'>Facebook</span></a>
                <a href="https://www.instagram.com/ladcevenements?igsh=MWN3Z3c0azhvaXV6dg=="><i className="fa-brands fa-instagram"></i>
                    <span className='mr-5'>Instagram</span></a>
            </div>

            <p className={styles.webdeveloppement}>Développement web : <a href="https://www.linkedin.com/in/mathildecalon/" target="blank">Mathilde Calon</a></p>
        </footer>
    )
}

export default Footer;