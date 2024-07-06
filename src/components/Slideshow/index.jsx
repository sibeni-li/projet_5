

function Slideshow ({lodgeId,lodgeSrc}) {
    //State
    
    //Comportement

    //Render
    return (
        <div key={lodgeId}>
            <img src={lodgeSrc} className="slide-show__img" alt=""/>
        </div>
    );
};

export default Slideshow;