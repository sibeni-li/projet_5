/**
 * Footer Component
 * 
 * This component renders the footer of the application.
 *
 * @component
 * @requires ../../assets/LOGOW.png
 * @requires ../../styles/Footer.scss
 * 
 * Key features:
 * 1. Displays the application logo in black and white
 * 2. Shows copyright information
 *
 * Styling:
 * - Uses 'footer' class for the main container
 * - Inner content wrapped in 'footer__infos' class
 * - Logo has 'footer__infos--logo' class
 * - Copyright text has 'footer__infos--rights' class
 *
 * @example
 * return (
 *   <Footer />
 * )
 */


//Imports
import LOGOW from "../../assets/LOGOW.png";
import "../../styles/Footer.scss";


function Footer () {
   
    return (
        <footer className="footer">
            <div className="footer-infos">
                <img src={LOGOW} className="footer-infos__logo" alt="Logo Kasa noir et blanc"/>
                <p className="footer-infos__rights">© 2020 Kasa. All rights reserved</p> 
            </div>
        </footer>
    );
};

export default Footer;