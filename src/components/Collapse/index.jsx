//Imports
import { useState } from "react";
import "../../styles/Collapse.scss";
import arrow from "../../assets/arrow.png";


function Collapse ({titleCollapse , contentCollapse}) {
   
    const [openCollapse, setOpenCollapse] = useState(false);
    console.log(openCollapse);
   
    const handleClick = () => {
        setOpenCollapse(!openCollapse);
    };
    
        return (
            <div className="collapse">
                <h2 className="collapse__title">
                    {titleCollapse}
                    <img src={arrow} className={`arrow ${openCollapse ? 'rotate' : ''}`} alt="flèche" onClick={handleClick}></img>
                </h2>
                <div className={`collapse__content ${openCollapse ? 'active' : ''}`}>{contentCollapse}</div>
            </div>
        );
};

export default Collapse;
