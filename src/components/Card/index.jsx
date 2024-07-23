//Imports
import "../../styles/Card.scss";
import { Link } from "react-router-dom";
import data from "../../assets/logements.json";


function Card () {
   
    const lodges = data.map((data) => {

        const id = data.id;

        return (
            <Link to={'./fiche-logement/'+id} key={id} id={id} className="card-link">
                <article className="card">
                    <img 
                        src={data.cover} 
                        className="card-image" 
                        alt={data.title} 
                    />
                    <p>{data.title}</p>
                </article>
            </Link>
        );
    });
    console.log(lodges);
   
    return (
        <div className="card-container">
            {lodges}
        </div>
    );
};

export default Card;