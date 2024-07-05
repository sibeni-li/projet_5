import "../../styles/Card.scss"
import { Link } from "react-router-dom"


function Card ({title,imageUrl,linkLodges}) {
    //State
    
    //Comportement
    
    //Render
    return (
        <Link to={linkLodges}>
        <article className="card">
            <img 
                src={imageUrl} 
                className="card-image" 
                alt="" 
            />
            <p>{title}</p>
        </article>
        </Link>
    )
}

export default Card