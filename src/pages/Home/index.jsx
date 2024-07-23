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