import { useState } from "react";
import "../../styles/Collapse.scss";
import arrow from "../../assets/arrow.png";

function Collapse ({titleCollapse , contentCollapse}) {
    //State
    const [openCollapse, setOpenCollapse] = useState(false);
    console.log(openCollapse);
    //Comportement
    const handleClick = () => {
        setOpenCollapse(!openCollapse);
    };
    //Render
        return (
            <div className="collapse">
                <h2 className="collapse-title">
                    {titleCollapse}
                    <img src={arrow} className={`arrow ${openCollapse ? 'rotate' : ''}`} alt="arrow" onClick={handleClick}></img>
                </h2>
                <div className={`collapse-content ${openCollapse ? 'active' : 'inactive'}`}>{contentCollapse}</div>
            </div>
        ) ;
};

export default Collapse;
