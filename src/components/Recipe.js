import React     from 'react';

function Recipe(props) {

    const name = props.name,
    imgURL = props.imgURL,
    description = props.description;
    
    const ingredients = props.ingredients.map(ing => <li key={ing}>{ing}</li>);


    return (
        <div className="Recipe">
            <h2>{name}</h2>
            <div className="Recipe__desc">
                <img src={imgURL} />
                <div className="Recipe__descInfo">{description}</div>
            </div>
            <ol className="Recipe__list">
                {ingredients}
            </ol>
        </div>
    )
}

export default Recipe