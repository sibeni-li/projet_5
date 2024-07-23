/**
 * Tag Component
 * 
 * This component displays a list of tags for a lodge.
 *
 * @component
 * @requires ../../styles/Tag.scss
 *
 * @param {Object} props.showLodge - The lodge object containing tag data
 * 
 * Key features:
 * 1. Renders a list of tags
 * 2. Each tag is displayed as a list item
 *
 * Styling:
 * - Uses an unordered list to display tags
 *
 * @example
 * return (
 *   <Tag showLodge={lodgeData} />
 * )
 */


//Imports
import '../../styles/Tag.scss';


function Tag ({showLodge}) {

    const tag = showLodge.tags;

    return (
        <div>
            <ul>
                {tag.map((tag)=> <li className='tag' key={tag}>{tag}</li>)}
            </ul>
        </div>
    );
};

export default Tag;