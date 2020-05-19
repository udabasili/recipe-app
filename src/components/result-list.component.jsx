import React, { useState, useEffect } from 'react';
import { recipes } from '../data/recipes.data';
import ResultItems from './result-items.component';

function ResultList({userChoices}) {
    const [filteredData, setfilteredData] = useState([])

    useEffect(() => {
        let filtered;
        if(userChoices.length > 0 ) {
            filtered = recipes.filter((recipe) => (
                recipe.ingredients.some((ingredient) => userChoices.some((userChoice) => {
                    const regex = RegExp(`${userChoice}`, 'g');
                    // console.log(regex.test(d.name))
                    return regex.test(ingredient.name);
                }))
            ))
        }
        else{
            filtered = recipes
        }
        setfilteredData(filtered)
        
        return () => {
        }
    }, [userChoices])
    return (
        <div className='result-list'>
            {filteredData && filteredData.map((recipe, i) => (
                <ResultItems key={i} {...recipe}/>
            ))}
        </div>
    )
}

ResultList.propTypes = {

}

export default ResultList

