import Banner from "../../components/Banner";
import Card from "../../components/Card";
import imageHome from "../../assets/imageHome.png";
import "../../styles/Home.scss";



function Home () {
    //State
    
    //Comportement

    //Render
    return (
        <div>
            <Banner 
                imageSrc={imageHome} 
                text="Chez vous, partout et ailleurs" 
            />
            <Card/>
        </div>
    );
};

export default Home;