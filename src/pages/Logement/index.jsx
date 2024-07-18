import data from "../../assets/logements.json";
import Error from "../Error";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import "../../styles/Logement.scss";
import starActive from "../../assets/starActive.png"
import starInactive from "../../assets/starInactive.png"

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
        const ratingValue = showLodge.rating
        console.log(ratingValue)
        const stars = []
        for (let i=0; i<5; i++){
            if (i < ratingValue) {
                stars.push(<img src={starActive} key={i} alt="" />)
            }else {
                stars.push(<img src={starInactive} key={i} alt="" />)
            }
        }
        return ( 
            <div>
                <div>
                    <Slideshow showLodge={showLodge}/>
                </div>
                <div className="lodge">
                    <div className="lodge-a">
                        <div className="a">
                            <div className="aa">
                                <h2 className="lodge-title">{showLodge.title}</h2>
                                <p className="lodge-location">{showLodge.location}</p>
                            </div>
                            <div className="ba">
                                <Tag className="lodge-tag"
                                    showLodge={showLodge}/>
                            </div>
                        </div>
                        <div className="b">
                            <div className="ab">
                                <p className="lodge-host-name">{showLodge.host.name}</p>
                                <img className="lodge-host-picture" src={showLodge.host.picture} alt={showLodge.host.name}/>
                            </div>
                            <div className="bb">
                                {stars}
                            </div>
                        </div>
                    </div>
                    <div className="c">
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