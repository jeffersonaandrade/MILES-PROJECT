import styles from './Header.module.css'



function Header() {
  return (
    <>
        <header className={styles.header}>
             <div><strong>Vupt!</strong></div>
        <div>
            <ol className={styles.listaHeaderDesktop}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Produto</a></li>
                <li><a href='#'>Sobre</a></li>
            </ol>
        </div>
        <div className={styles.mobileMenu}>
            <button className={styles.hamburguerButton}><i className="fas fa-bars"></i></button>
            {/*<button className={styles.buttonCloseHeader}><i className="fas fa-times"></i></button>*/}
        <div>
            <ol className={styles.listaHeaderMobile}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Produto</a></li>
                <li><a href='#'>Sobre</a></li>
                <li><a href='#'>Buscar</a></li>
                <li><a href='#'>Anunciar</a></li>
            </ol>
        </div>
        </div>
        <div>
            <ol className={styles.listaHeaderDesktop}>
                <div id='searchMiles' className={styles.searchMiles}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <li><a href='#'>Buscar</a></li>
                </div>
                <div id='addMiles' className={styles.addMiles}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <li><a href='#'>Anunciar</a></li>
                </div>
                <li><button className={styles.hamburguerButton}><i className="fas fa-bars"></i></button></li>
            </ol>
        </div>
        </header>
    </>
  )
}

Header.propTypes = {

}

export default Header;

