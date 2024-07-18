import { Link , useLocation } from "react-router-dom";
import LOGO from '../../assets/LOGO.png';
import "../../styles/Header.scss";

function Header () {
    //State
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    //Comportement

    //Render
    return (
        <nav className="nav">
            <img src={LOGO} className="nav__logo" alt="" />
            <ul className="nav__list">
                <li>
                    <Link 
                        to="/" 
                        className={`nav__list--link home ${isActive('/') ? 'active' : ''}`}>
                            Accueil
                    </Link>
                </li>
                <li> 
                    <Link 
                        to="/apropos" 
                        className={`nav__list--link ${isActive('/apropos') ? 'active' : ''}`}>
                            A propos
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;