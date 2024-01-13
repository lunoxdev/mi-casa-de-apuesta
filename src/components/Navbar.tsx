import { useState } from 'react';
import '../styles/header/style.css';

const Navbar: React.FC = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <header id="header-nav" className="sticky z-50 top-0 w-full p-4">
      <div className="flex justify-between items-center">
        <div>
          <a href="/">
            <img
              src="/favicon.svg"
              alt="Mi casas de apuestas Logo"
              className="border rounded-full"
              width="36"
              height="36"
            />
          </a>
        </div>
        <nav className="hidden md:flex flex-grow basis-0 w-full space-x-5 md:justify-center">
          <a className="hover:underline-offset-8 hover:underline font-light" href="#operadores">
            Lista de Operadores
          </a>
          <a className="hover:underline-offset-8 hover:underline font-light" href="#apostar">
            ¿Cómo Apostar?
          </a>
          <a className="hover:underline-offset-8 hover:underline font-light" href="#consideraciones">
            Consideraciones
          </a>
          <a className="hover:underline-offset-8 hover:underline font-light" href="#faq">
            FAQ
          </a>
          <a className="hover:underline-offset-8 hover:underline font-light" href="#footer">
            Nosotros
          </a>
        </nav>

        <button
          id="menu-toggle"
          className="flex flex-grow basis-0 justify-end text-2xl md:hidden z-50"
          onClick={toggleMobileMenu}
        >
          <span id="menu-icon">{isMobileMenuVisible ? '✕' : '☰'}</span>
        </button>

        <nav
          id="mobile-menu"
          className={`${
            isMobileMenuVisible ? 'flex' : 'hidden'
          } bg-black backdrop-blur-3xl w-full flex-col items-center text-center text-2xl fixed top-0 left-0 right-0 min-h-screen place-content-center`}
        >
          <a className="my-2 hover:underline hover:underline-offset-8" href="#operadores" onClick={closeMobileMenu}>
            Lista de Operadores
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#apostar" onClick={closeMobileMenu}>
            ¿Cómo Apostar?
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#consideraciones" onClick={closeMobileMenu}>
            Consideraciones
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#faq" onClick={closeMobileMenu}>
            FAQ
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#footer" onClick={closeMobileMenu}>
            Nosotros
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
