import Banner from "../../components/Banner"
import Card from "../../components/Card"
import imageHome from "../../assets/imageHome.png"
import "../../styles/Home.scss"
import data from "../../assets/logements.json"


function Home () {
    //State
    
    //Comportement
    const lodges = data.map((data) => {
        const id = data.id
        return (
            <Card 
                linkLodges={'./fiche-logement/'+id}
                key={id}
                id={id}
                imageUrl={data.cover} 
                title={data.title}
            />
        )
    })
    console.log(lodges)
    //Render
    return (
        <div>
            <Banner 
                imageSrc={imageHome} 
                text="Chez vous, partout et ailleurs" 
            />
            <div className="card-container" >
                {lodges}
            </div>
        </div>
    )
}

export default Home