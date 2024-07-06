import { useState } from "react";
import "../../styles/Collapse.scss";
import arrowDown from "../../assets/arrowDown.png";
import arrowUp from "../../assets/arrowUp.png";

function Collapse ({titleCollapse , contentCollapse}) {
    //State
    const [openCollapse, setOpenCollapse] = useState(false);
    console.log(openCollapse);
    //Comportement
    const handleClick = () => {
        setOpenCollapse(!openCollapse);
    };
    //Render
    if (openCollapse) {
        return (
            <div className="collapse">
                <h2 className="collapse-title">
                    {titleCollapse}
                    <img src={arrowDown} alt="" onClick={handleClick}></img>
                </h2>
                <div className="collapse-content">{contentCollapse}</div>
            </div>
        ) ;
    } else {
        return (
            <div className="collapse">
                <h2 className="collapse-title">
                    {titleCollapse}
                    <img src={arrowUp} alt="" onClick={handleClick}></img>
                </h2>
            </div>
        );
    };
};

export default Collapse;

/***
 * ***TODO***
 * Ajouter animation de transition à l'ouverture du collapse
 * 
 */