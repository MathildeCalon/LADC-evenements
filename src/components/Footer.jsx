import styles from './Footer.module.scss';

function Footer () {
    return (
        <footer className={`${styles.footer} d-flex flex-row align-items-center p-5`}>
                <div className='mr-5 w-33'>
                    <a href="https://www.facebook.com/profile.php?id=61552552079121" target='blank'>
                    <i className="fa-brands fa-facebook mr-5"></i>
                    Facebook</a>
                </div>

                <div className='mr-5 w-33'>
                    <a href="https://www.instagram.com/ladcevenements?igsh=MWN3Z3c0azhvaXV6dg==" target='blank'>
                    <i className="fa-brands fa-instagram mr-5"></i>
                    Instagram</a>
                </div>

                <div className='mr-5 w-33'>
                    <a href="https://www.linkedin.com/in/mathildecalon/" target="blank">
                    <i className="fa-solid fa-code mr-5"></i>
                    Design et développement par Mathilde Calon</a>
                </div>
        </footer>
    )
}

export default Footer;