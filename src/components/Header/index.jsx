/**
 * Header Component
 * 
 * This component renders the navigation header for the application.
 * 
 * @component
 * @requires react-router-dom
 * @requires ../../assets/LOGO.png
 * @requires ../../styles/Header.scss
 * 
 * Key features:
 * 1. Displays the application logo
 * 2. Provides navigation links
 * 3. Highlights the active page in the navigation
 *
 * Navigation structure:
 * - Home page: "Accueil"
 * - About page: "A propos"
 *
 * Active link handling:
 * Uses the useLocation hook to determine the current path and apply 'active' class
 *
 * @example
 * return (
 *   <Header />
 * )
 */


//Imports
import { Link , useLocation } from "react-router-dom";
import LOGO from '../../assets/LOGO.png';
import "../../styles/Header.scss";


function Header () {

    const location = useLocation();

    /**
   * Determines if the given path is the current active route
   * @param {string} path - The path to check
   * @returns {boolean} True if the path is active, false otherwise
   */
    const isActive = (path) => location.pathname === path;
    
    return (
        <header>
            <nav className="nav">
                <img src={LOGO} className="nav-logo" alt="Logo Kasa" />
                <ul className="nav-list">
                    <li>
                        <Link 
                            to="/" 
                            className={`nav-list__link ${isActive('/') ? 'active' : ''}`}>
                                Accueil
                        </Link>
                    </li>
                    <li> 
                        <Link 
                            to="/apropos" 
                            className={`nav-list__link ${isActive('/apropos') ? 'active' : ''}`}>
                                A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;