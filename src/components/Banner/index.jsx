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