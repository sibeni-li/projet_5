/**
 * Slideshow Component
 * 
 * This component creates a slideshow of images for a lodging.
 *
 * @component
 * @requires React
 * @requires ../../styles/Slideshow.scss
 * @requires ../../assets/arrowBack.png
 * @requires ../../assets/arrowForward.png
 *
 * @param {Object} props.showLodge - The lodge object containing image data
 * 
 * Key features:
 * 1. Displays images in a slideshow format
 * 2. Provides navigation arrows for multiple images
 * 3. Shows current image number out of total
 * 4. Handles edge cases (e.g., only one image)
 *
 * State:
 * - currentLodge: index of the current image being displayed
 *
 * Navigation:
 * - handleNext: moves to next image (loops to first if at end)
 * - handlePrev: moves to previous image (loops to last if at beginning)
 *
 * @example
 * return (
 *   <Slideshow showLodge={lodgeData} />
 * )
 */


//Imports
import "../../styles/Slideshow.scss";
import arrowBack from "../../assets/arrowBack.png";
import arrowForward from "../../assets/arrowForward.png";
import { useState } from "react";


function Slideshow ({showLodge}) {
    
    //State
    const[currentLodge , setCurrentLodge] = useState(0);

    //Behavior
    const handleNext = () => {
        setCurrentLodge(currentLodge >= showLodge.pictures.length -1 ? 0 : currentLodge +1);
    };
    const handlePrev = () => {
        setCurrentLodge(currentLodge < 1 ? showLodge.pictures.length -1 : currentLodge -1);
    };

    //Render
    if (showLodge.pictures.length >1) {

        return (
            <div key={showLodge.id} className="slide-show">
                <img src={arrowBack} className="slide-show__back" onClick={handlePrev} alt="flèche précédente"/>
                <img src={showLodge.pictures[currentLodge]} className="slide-show__img" alt={showLodge.title}/>
                <img src={arrowForward} className="slide-show__forward" onClick={handleNext} alt="flèche suivante"/>
                <p className="lodge-number">{currentLodge+1}/{showLodge.pictures.length}</p>
            </div>
        );
    } else {
        
        return (
            <div key={showLodge.id} className="slide-show alone">
                <img src={showLodge.pictures[currentLodge]} className="slide-show__img alone" alt={showLodge.title}/>
            </div>
        );
    };
};

export default Slideshow;