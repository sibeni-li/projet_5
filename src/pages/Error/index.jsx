/**
 * Error Component
 * 
 * This component displays a 404 error page when a route is not found.
 *
 * @component
 * @requires react-router-dom
 * @requires ../../styles/Error.scss
 * 
 * Key features:
 * 1. Displays a large "404" text
 * 2. Shows an error message
 * 3. Provides a link to return to the home page
 *
 * Layout:
 * - Uses a 'error' class for the main container
 * - Error title (404) has class 'error-title'
 * - Error message has class 'error-text'
 * - Return link has class 'error-link'
 *
 * Responsiveness:
 * - Uses a <br> tag with class 'br' for potential responsive layout adjustments
 *
 * @example
 * return (
 *   <Error />
 * )
 */

//Imports
import { Link } from "react-router-dom";
import "../../styles/Error.scss";


function Error () {
    
    return (
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__text">Oups! La page que <br className="br"/> vous demandez n'existe pas.</p>
            <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error;