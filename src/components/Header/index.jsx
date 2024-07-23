//Imports
import { Link , useLocation } from "react-router-dom";
import LOGO from '../../assets/LOGO.png';
import "../../styles/Header.scss";


function Header () {

    const location = useLocation();
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
                                A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;