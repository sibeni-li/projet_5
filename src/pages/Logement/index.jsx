import Slideshow from "../../components/Slideshow";
import { useParams } from "react-router-dom";
import data from "../../assets/logements.json";
import { useState } from "react";
import arrowBack from "../../assets/arrowBack.png";
import arrowForward from "../../assets/arrowForward.png";
import "../../styles/Logement.scss";

function Logement (){
    //State
    const {id} = useParams();
    const[currentLodge , setCurrentLodge] = useState(0);
    const showLodge = data.find((lodge) => lodge.id === id);
    console.log(showLodge);
    //Comportement
    const handleNext = () => {
        setCurrentLodge(currentLodge >= showLodge.pictures.length ? 0 : currentLodge +1);
    };
    const handlePrev = () => {
        setCurrentLodge(currentLodge < 0 ? showLodge.pictures.length -1 : currentLodge -1);
    };
    console.log(currentLodge)
    //Render
    return (
        <div className="slide-show">
            <img src={arrowBack} className="slide-show__back" onClick={handlePrev} alt=""/>
            <Slideshow 
                lodgeId={showLodge.id} 
                lodgeSrc={showLodge.pictures[currentLodge]}
            />
            <img src={arrowForward} className="slide-show__forward" onClick={handleNext} alt=""/>
        </div>
    );
};

export default Logement;