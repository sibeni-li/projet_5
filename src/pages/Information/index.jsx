/**
 * Information Component
 * 
 * This component renders the "About" page of the application.
 * It displays a banner and a series of collapsible sections with information about the service.
 *
 * @component
 * @requires ../../components/Banner
 * @requires ../../components/Collapse
 * @requires ../../assets/imageInfo.png
 * @requires ../../styles/Information.scss
 * 
 * Key features:
 * 1. Displays a banner with a background image
 * 2. Renders a series of collapsible sections with information about the service
 *
 * Data structure:
 * - Uses an array 'aboutList' to store information for each collapsible section
 * - Each item in 'aboutList' has an id, title, and content
 *
 * Layout:
 * - Banner is displayed at the top
 * - Collapsible sections are rendered below the banner in a div with class 'about'
 *
 *
 * @example
 * return (
 *   <Information />
 * )
 */


//Imports
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import imageInfo from "../../assets/imageInfo.png";
import "../../styles/Information.scss";


// Array of objects containing information for each collapsible section
const aboutList = [
    {
        id:0 ,
        title: 'Fiabilité',
        content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        id:1 ,
        title: 'Respect',
        content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        id:2 ,
        title: 'Service',
        content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        id:3 ,
        title: 'Sécurité',
        content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];


function Information () {
    
    const about = aboutList.map((aboutList) => {

        const idAbout = aboutList.id;

        return (
            <Collapse 
                key={idAbout}
                id={idAbout}
                titleCollapse={aboutList.title} 
                contentCollapse={aboutList.content}
            />
        );
    });
    
    return (
        <div>
            <Banner 
                imageSrc={imageInfo}
                imageDesc="Paysage montagneux"
            />
            <div className="collapse-box__about">
                {about}
            </div>
        </div>
    );
};

export default Information;