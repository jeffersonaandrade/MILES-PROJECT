import styles from './Header.module.css'



function Header() {
  return (
    <>
        <header className={styles.header}>
             <div><strong>Vupt!</strong></div>
        <div>
            <ol className={styles.listaHeader}>
                <li>Home</li>
                <li>Produto</li>
                <li>Sobre</li>
            </ol>
        </div>
        <div>
            <ol className={styles.listaHeaderMobile}>
                <li>Home</li>
                <li>Produto</li>
                <li>Sobre</li>
            </ol>
        </div>
        <div>
            <ol className={styles.listaHeader}>
                <li>Buscar</li>
                <li>Anunciar</li>
                <li>Configs</li>
            </ol>
        </div>
        </header>
    </>
  )
}

Header.propTypes = {

}

export default Header;

