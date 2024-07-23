/**
 * Card Component
 * 
 * This component renders a grid of lodging cards based on data imported from a JSON file.
 *
 * @component
 * @requires react-router-dom
 * @requires ../../styles/Card.scss
 * @requires ../../assets/logements.json
 * 
 * Key features:
 * 1. Generates a card for each lodging in the data
 * 2. Each card is a link to the detailed view of the lodging
 * 3. Displays an image and title for each lodging
 *
 * Data structure:
 * Expects an array of lodging objects, each with:
 * - id: unique identifier
 * - cover: image URL
 * - title: lodging title
 *
 * Styling:
 * - Uses 'card-container' class for the grid
 * - Each card link has 'card-link' class
 * - Card content wrapped in 'card' class
 *
 * @example
 * return (
 *   <Card />
 * )
 */


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
   
    return (
        <div className="card-container">
            {lodges}
        </div>
    );
};

export default Card;