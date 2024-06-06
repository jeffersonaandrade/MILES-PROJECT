import styles from './Footer.module.css'

function Footer(){
    return(
    <>
        <footer className={styles.footer}>
            <div>
                <p className={styles.contentVuptFooter}><strong>Vupt!</strong></p>
                <p className={styles.contentReserved}>© 2024. Todos os direitos reservados.</p>
            </div>
            <div/>
        </footer>
    </>
    )
}

export default Footer;