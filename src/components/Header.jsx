import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <div className={styles.listaHeaderDesktop}>
        <div className={styles.searchAdd}>
          <div id='searchMiles' className={styles.searchMiles}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <li><a href='#'>Buscar</a></li>
          </div>
          <div id='addMiles' className={styles.addMiles}>
            <i className="fa fa-plus" aria-hidden="true"></i>
            <li><a href='#'>Anunciar</a></li>
          </div>
        </div>
        </div>
        <button className={styles.hamburguerButton} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </header>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.buttonCloseHeader} onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ol className={styles.listaHeaderMobile}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Produto</a></li>
            <li><a href='#'>Sobre</a></li>
            <li><a href='#'>Buscar</a></li>
            <li><a href='#'>Anunciar</a></li>
          </ol>
        </div>
      )}
    </>
  );
}

export default Header;
