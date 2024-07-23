/**
 * Home Component
 * 
 * This component renders the home page of the application.
 *
 * @component
 * @requires ../../components/Banner
 * @requires ../../components/Card
 * @requires ../../assets/imageHome.png
 * @requires ../../styles/Home.scss
 * 
 * Key features:
 * 1. Displays a banner with a background image and text
 * 2. Renders a grid of lodging cards
 *
 * Layout:
 * - The component uses a 'home' class for styling
 * - Banner is displayed at the top
 * - Card grid is displayed below the banner
 *
 * @example
 * return (
 *   <Home />
 * )
 */


//Imports
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import imageHome from "../../assets/imageHome.png";
import "../../styles/Home.scss";


function Home () {
    
    return (
        <div className="home">
            <Banner 
                imageSrc={imageHome} 
                text="Chez vous, partout et ailleurs" 
                imageDesc="Photo d'une plage rocheuse"
            />
            <Card/>
        </div>
    );
};

export default Home;