import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Nav.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';


function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            navRef.current.classList.add('show');
        } else {
            navRef.current.classList.remove('show');
        }
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <>
            <header className="headerNav">
                <div data-aos="fade-right">
                    <img className="logoNav" src='https://github.com/AgosNori/Cita2New/blob/master/public/Logo%20RGB%20BLANCO.png?raw=true' alt="Logo" />
                </div>
                <nav ref={navRef} className={`navNav ${isMenuOpen ? "responsive_nav" : ""}`}>
                    <div data-aos="fade-left">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="dropdown" onMouseEnter={() => toggleDropdown("ministerios")} onMouseLeave={() => toggleDropdown(null)}>
                                <Link to="#ministerios">Ministerios</Link>
                                {activeDropdown === "ministerios" && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/hombres" rel="noopener noreferrer">Discipulado de hombres</Link></li>
                                        <li><Link to="/mujeres" rel="noopener noreferrer">Discipulado de mujeres</Link></li>
                                        <li><Link to="/matrimonios" rel="noopener noreferrer">Matrimonios</Link></li>
                                        <li><Link to="/citakids" rel="noopener noreferrer">Cita kids</Link></li>
                                        <li><Link to="/jovenes" rel="noopener noreferrer">Jovenes</Link></li>
                                        <li><Link to="/reuniones" rel="noopener noreferrer">Reuniones generales</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="/nosotros" rel="noopener noreferrer">Nosotros</Link>
                            </li>
                            <li className="dropdown" onMouseEnter={() => toggleDropdown("vidaiglesia")} onMouseLeave={() => toggleDropdown(null)}>
                                <Link to="#vidaiglesia">Vida de la iglesia</Link>
                                {activeDropdown === "vidaiglesia" && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/avisos" rel="noopener noreferrer">Avisos importantes</Link></li>
                                        <li><Link to="/calendario" rel="noopener noreferrer">Calendario</Link></li>
                                        <li><Link to="/campamento" rel="noopener noreferrer">Campamentos</Link></li>
                                        <li><Link to="/musicos" rel="noopener noreferrer">Escuela de musicos</Link></li>
                                        <li><Link to="/galeria" rel="noopener noreferrer">Galeria</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="/soynuevo" rel="noopener noreferrer">Soy Nuevo</Link>
                            </li>
                            <li>
                                <Link to="/contacto" rel="noopener noreferrer">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <button className="nav-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>
        </>
    );
}

export default Nav;
