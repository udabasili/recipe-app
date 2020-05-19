import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { recipes } from '../data/recipes.data';


export default class RecipePage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { recipeName} = this.props.match.params;
        const filtered = recipes.find((recipe) => recipe.name === recipeName )
        console.log(filtered)
        return (
            <div className='recipe-page'>
                <div className="recipe-page__header">
                    <div className='recipe-page__image' style={{
                        backgroundImage: `url(${filtered.imageURL})`
                    }}>
                        <h3 className="recipe-page__title">
                            {filtered.name}
                        </h3>
                    </div>
                </div>
               <div className="recipe-page__ingredients">
                    <ul className='recipe-page__ingredient-list'>
                        {filtered.ingredients.map((ingredient, i) =>(
                            <li className='recipe-page__ingredient-item' key={i}>
                                <span className='quantity'>{ingredient.quantity}</span>
                                <span className='name'>{ingredient.name}</span>
                            </li>
                        ))}
                    </ul>
               </div>
               <div className="recipe-page__procedure">
                    <h3 className='tertiary-header'>Procedures</h3>
                    <hr/>
                    <ul className='procedure-list'>
                        {filtered.steps.map((step, i) => (
                            <li className='procedure-item' key={i}>
                                <span className='quantity'>{step}</span>
                            </li>
                        ))}
                    </ul>

               </div>
            </div>
        )
    }
}
