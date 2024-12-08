import styles from './Footer.module.scss';

function Footer () {
    return (
        <footer className={`${styles.footer} d-flex flex-row align-items-center p-5`}>
                <div className='mr-5 w-33'>
                    <a href="https://www.instagram.com/ladcevenements59?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
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