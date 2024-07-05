import LOGOW from "../../assets/LOGOW.png"
import "../../styles/Footer.scss"

function Footer () {
    //State

    //Comportement

    //Render
    return (
        <footer className="footer">
            <div className="footer__infos">
                <img src={LOGOW} className="footer__infos--logo" alt="..."/>
                <p className="footer__infos--rights">© 2020 Kasa. All rights reserved</p> 
                </div>
        </footer>
    )

}

export default Footer