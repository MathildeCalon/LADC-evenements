import styles from './Footer.module.scss';

function Footer () {
    return (
        <footer className={`${styles.footer} d-flex flex-row flex-fill p-5`}>
            <div className="d-flex flex-column mr-15">
                <div className='mt-5'>
                    <a href="https://www.facebook.com/profile.php?id=61552552079121" target='blank'><i className="fa-brands fa-facebook mr-5"></i>
                    Facebook</a>
                </div>

                <div className='mt-5'></div>
                    <a href="https://www.instagram.com/ladcevenements?igsh=MWN3Z3c0azhvaXV6dg==" target='blank'><i className="fa-brands fa-instagram mr-5"></i>
                    Instagram</a>
                    </div>

                    <div className='mt-5'>
                    <a href="https://www.linkedin.com/in/mathildecalon/" target="blank">
                    <i className="fa-solid fa-code mr-5"></i>Design et développement : Mathilde Calon</a>
            </div>

        </footer>
    )
}

export default Footer;