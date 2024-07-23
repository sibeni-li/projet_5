/**
 * Logement Component
 * 
 * This component displays detailed information about a specific lodging.
 * It fetches data in json file for a particular lodging based on the ID from the URL parameters.
 * 
 * @component
 * @requires react-router-dom
 * @requires ../../components/Slideshow
 * @requires ../../components/Tag
 * @requires ../../components/Collapse
 * @requires ../../styles/Logement.scss
 * @requires ../../assets/starActive.png
 * @requires ../../assets/starInactive.png
 * 
 * Key features:
 * 1. Uses useParams hook to get the lodging ID from the URL
 * 2. Displays a slideshow of lodging images
 * 3. Shows lodging title, location, and host information
 * 4. Renders tags associated with the lodging
 * 5. Displays a star rating system
 * 6. Provides collapsible sections for description and equipment
 *
 * Error handling:
 * - If no matching lodging is found, it renders the Error component
 *
 * @example
 * return (
 *   <Logement />
 * )
 */


//Imports
import data from "../../assets/logements.json";
import Error from "../Error";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import "../../styles/Logement.scss";
import starActive from "../../assets/starActive.png";
import starInactive from "../../assets/starInactive.png";


function Logement (){
    
    const {id} = useParams();
    
    const showLodge = data.find((lodge) => lodge.id === id);
   
    if (!showLodge) {

        return (<Error/>);

    }else {

        // Generate star rating
        const ratingValue = showLodge.rating;
        const stars = [];

        for (let i=0; i<5; i++){
            if (i < ratingValue) {
                stars.push(<img src={starActive} key={i} alt="étoile active" />);
            }else {
                stars.push(<img src={starInactive} key={i} alt="étoile inactive" />);
            };
        };
        
        return ( 
            <div>
                <div>
                    {/* Slideshow component */}
                    <Slideshow showLodge={showLodge}/>
                </div>
                <div className="lodge">
                    <div className="lodge-about">
                        <div className="lodge-information">
                            <div className="lodge-information__title-location">
                                {/* Lodging information */}
                                <h2 className="lodge-information__title">{showLodge.title}</h2>
                                <p className="lodge-information__location">{showLodge.location}</p>
                            </div>
                            <div className="tag-container">
                                {/* Tags component */}
                                <Tag className="lodge-tag"
                                    showLodge={showLodge}/>
                            </div>
                        </div>
                        <div className="host-information-rating">
                            <div className="host-infos">
                                {/* Host information */}
                                <p className="lodge-host-name">{showLodge.host.name}</p>
                                <img className="lodge-host-picture" src={showLodge.host.picture} alt={showLodge.host.name}/>
                            </div>
                            <div className="rating">
                                {/* Star rating */}
                                {stars}
                            </div>
                        </div>
                    </div>
                    <div className="collapse-box__lodges">
                        {/* Collapse components for description and equipment */}
                        <Collapse 
                            key={showLodge.description}
                            titleCollapse="Description" 
                            contentCollapse={showLodge.description}
                        />
                        <Collapse   
                            titleCollapse="Equipements" 
                            contentCollapse={showLodge.equipments.map((equipement) => <li key={equipement}>{equipement}</li>)} 
                        />
                    </div>
                </div>
            </div>   
        );
    };      
};

export default Logement;