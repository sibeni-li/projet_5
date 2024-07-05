import { Link } from "react-router-dom"
import LOGO from '../../assets/LOGO.png'
import "../../styles/Header.scss"

function Header () {
    //State

    //Comportement

    //Render
    return (
        <nav className="nav">
            <img src={LOGO} className="nav__logo" alt="" />
            <ul className="nav__list">
                <li><Link to="/" className="nav__list--link home">Accueil</Link></li>
                <li> <Link to="/apropos" className="nav__list--link">A propos</Link></li>
            </ul>
        </nav>
    )
}

export default Header