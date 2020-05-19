import React from 'react';
import { Link } from 'react-router-dom';

function ResultItems({ name, ingredients, steps, imageURL, timers}) {
    return (
        <div className='result-item'>
            <img src={imageURL} className='result-item__image' />
            <h4 className="result-item__title">{name}</h4>
            <div className="result-item__details">
                {`${ingredients.length} Ingredients || 
                ${timers.reduce((a, b) => parseInt(a) + parseInt(b), 0)} Minutes`}
            </div>
            <Link to={`recipe/${name}`} className='result-item__button'>Read More</Link>
        </div>
    )
}

ResultItems.propTypes = {

}

export default ResultItems

