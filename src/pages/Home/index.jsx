import { Link } from "react-router-dom"

function Home () {
    return <div>
        <h1>Home</h1>
        <article><Link to={'./fiche-logement'}>Voici le logement</Link></article>
        </div>
}

export default Home