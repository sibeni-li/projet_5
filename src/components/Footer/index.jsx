//Imports
import LOGOW from "../../assets/LOGOW.png";
import "../../styles/Footer.scss";


function Footer () {
   
    return (
        <footer className="footer">
            <div className="footer__infos">
                <img src={LOGOW} className="footer__infos--logo" alt="Logo Kasa noir et blanc"/>
                <p className="footer__infos--rights">© 2020 Kasa. All rights reserved</p> 
                </div>
        </footer>
    );
};

export default Footer;