//Imports
import '../../styles/Tag.scss';


function Tag ({showLodge}) {

    const tag = showLodge.tags;

    return (
        <div>
            <ul>
                {tag.map((tag)=> <li key={tag}>{tag}</li>)}
            </ul>
        </div>
    );
};

export default Tag;