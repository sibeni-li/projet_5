function Tag ({showLodge}) {
    //Comportement
    const tag = showLodge.tags;
    const contentTag = tag.map((tag)=> <li key={tag}>{tag}</li>);
    console.log(contentTag);

    //Render
    return (
        <div>
            <ul>
                {contentTag}
            </ul>
        </div>
    );
};

export default Tag;