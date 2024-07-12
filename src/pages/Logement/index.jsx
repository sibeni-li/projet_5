import data from "../../assets/logements.json";
import Error from "../Error";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import "../../styles/Logement.scss";

function Logement (){
    //State
    const {id} = useParams();
    
    //Comportement
    const showLodge = data.find((lodge) => lodge.id === id);
    console.log(showLodge);
   
    //Render
    if (!showLodge) {
        return (<Error/>);
    }else {
        return ( 
            <div>
                <div>
                    <Slideshow showLodge={showLodge}/>
                </div>
                <div>
                    <h2>{showLodge.title}</h2>
                    <p>{showLodge.location}</p>
                    <p>{showLodge.host.name}</p>
                    <img src={showLodge.host.picture} alt={showLodge.host.name}/>
                </div>
                <div>
                    <Tag 
                        showLodge={showLodge}/>
                </div>
                <div>
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
        );
    };      
};

export default Logement;