import '../../styles/Banner.scss'

function Banner ({text,imageSrc}) {
    //State

    //Comportement
    
    //Render
    return (
        <div className="banner">
            <img src={imageSrc} className="banner__img" alt=""/>
            <p className="banner__text">{text}</p>
        </div>
    )
}

export default Banner