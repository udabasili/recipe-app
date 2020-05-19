import React from 'react'
import PropTypes from 'prop-types'


function IngredientItem({ ingredientValue, handleChecked}) {
    return (
        <div className='ingredient-items'>
            {ingredientValue.map((item, i) =>(
                <div className='ingredient-item' key={i}>
                    <label htmlFor={`ingredient-ltem-${item}-${i}`}
                        className='ingredient-item__label'>
                        
                        {item}
                        <input 
                            type="checkbox" 
                            name="ingredient-item-checkbox" 
                            onChange={handleChecked.bind(this, item)}
                            className="ingredient-item__checkbox" 
                            id={`ingredient-ltem-${item}-${i}`} />
                        <span className="ingredient-item__custom-checkbox"></span>
                    </label>                       
                </div>
            ))}
        </div>
    )
}

IngredientItem.propTypes = {
    ingredientValue: PropTypes.array
}

export default IngredientItem

