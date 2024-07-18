import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import imageInfo from "../../assets/imageInfo.png";
import "../../styles/Information.scss";

const aboutList = [
    {
        id:0 ,
        title: 'Fiabilité',
        content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
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
    //State

    //Comportement
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
    //Render
    return (
        <div>
            <Banner 
                imageSrc={imageInfo}
            />
            <div className="about">
                {about}
            </div>
        </div>
    );
};

export default Information;