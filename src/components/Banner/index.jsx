/**
 * Banner Component
 * 
 * This component displays a banner with an image and text overlay.
 *
 * @component
 * @requires ../../styles/Banner.scss
 *
 * @param {string} props.text - The text to display on the banner
 * @param {string} props.imageSrc - The source URL of the banner image
 * @param {string} props.imageDesc - The alt text for the banner image
 * 
 * Key features:
 * 1. Renders a full-width banner image
 * 2. Displays optional text overlay
 * 
 * Styling:
 * - Uses 'banner' class for the container
 * - Image has 'banner__img' class
 * - Text has 'banner__text' class
 *
 * @example
 * return (
 *   <Banner text="Welcome" imageSrc="/path/to/image.jpg" imageDesc="Welcome banner" />
 * )
 */


//Imports
import '../../styles/Banner.scss';


function Banner ({text,imageSrc,imageDesc}) {
    
    return (
        <div className="banner">
            <img src={imageSrc} className="banner__img" alt={imageDesc}/>
            <p className="banner__text">{text}</p>
        </div>
    );
};

export default Banner;