import "../../styles/Slideshow.scss"
import arrowBack from "../../assets/arrowBack.png";
import arrowForward from "../../assets/arrowForward.png";
import { useState } from "react";


function Slideshow ({showLodge}) {
    //State
    const[currentLodge , setCurrentLodge] = useState(0);

    //Comportement
    const handleNext = () => {
        setCurrentLodge(currentLodge >= showLodge.pictures.length -1 ? 0 : currentLodge +1);
    };
    const handlePrev = () => {
        setCurrentLodge(currentLodge < 1 ? showLodge.pictures.length -1 : currentLodge -1);
    };
    console.log(showLodge.pictures);

    //Render
    if (showLodge.pictures.length >1) {
        return (
            <div key={showLodge.id} className="slide-show">
                <img src={arrowBack} className="slide-show__back" onClick={handlePrev} alt=""/>
                <img src={showLodge.pictures[currentLodge]} className="slide-show__img" alt=""/>
                <img src={arrowForward} className="slide-show__forward" onClick={handleNext} alt=""/>
                <p className="lodge-number">{currentLodge+1}/{showLodge.pictures.length}</p>
            </div>
        );
    } else {
        return (
            <div key={showLodge.id} className="slide-show">
                <img src={showLodge.pictures[currentLodge]} className="slide-show__img" alt=""/>
            </div>
        );
    };
};

export default Slideshow;