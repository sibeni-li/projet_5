import "../../styles/Card.scss";
import { Link } from "react-router-dom";
import data from "../../assets/logements.json";


function Card () {
    //State
    
    //Comportement
    const lodges = data.map((data) => {
        const id = data.id;
        return (
            <Link to={'./fiche-logement/'+id} key={id} id={id} className="card-link">
                <article className="card">
                    <img 
                        src={data.cover} 
                        className="card-image" 
                        alt="" 
                    />
                    <p>{data.title}</p>
                </article>
            </Link>
        );
    });
    console.log(lodges)
    //Render
    return (
        <div className="card-container">
            {lodges}
        </div>
    )
};

export default Card;