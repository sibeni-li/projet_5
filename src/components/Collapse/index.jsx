/**
 * Collapse Component
 * 
 * This component creates a collapsible section with a title and content.
 *
 * @component
 * @requires React
 * @requires ../../styles/Collapse.scss
 * @requires ../../assets/arrow.png
 *
 * @param {string} props.titleCollapse - The title of the collapsible section
 * @param {React.ReactNode} props.contentCollapse - The content of the collapsible section
 * 
 * Key features:
 * 1. Toggleable content visibility
 * 2. Animated arrow indicator
 * 3. Customizable title and content
 *
 * State:
 * - openCollapse: boolean indicating if the content is visible
 *
 * Styling:
 * - Uses 'collapse' class for the container
 * - Title has 'collapse__title' class
 * - Content has 'collapse__content' class
 * - 'active' class applied to content when open
 * - Arrow rotates when content is open
 *
 * @example
 * return (
 *   <Collapse titleCollapse="Section Title" contentCollapse={<p>Section content</p>} />
 * )
 */


//Imports
import { useState } from "react";
import "../../styles/Collapse.scss";
import arrow from "../../assets/arrow.png";


function Collapse ({titleCollapse , contentCollapse}) {
   
    //State
    const [openCollapse, setOpenCollapse] = useState(false);
   
    //Behavior
    const handleClick = () => {
        setOpenCollapse(!openCollapse);
    };
    
    //Render
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
