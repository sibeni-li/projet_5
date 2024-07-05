import { useParams } from "react-router-dom"

function Logement (){
    const {id} = useParams()
    return (
        <h1>Logement {id}</h1>
    )
}

export default Logement