import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ingredientData from '../data/ingredient.data';
import IngredientItem from './ingredient-items.component';

const IngredientList = ({ searchData, handleChecked}) => {
    
    
   
    return (
        <div className='ingredients'>
            {Object.entries(ingredientData).map(([ingredientType, ingredientValue], i) => {
                const filteredData = ingredientValue.filter((int) => int.includes(searchData)) 

                return (
                    <div className='ingredient-list'>
                        <input type='checkbox' 

                            className='ingredient-list__checkbox' 
                            id={`ingredient-list-${ingredientType}-${i}`}/>
                        <label className='ingredient-list__header' htmlFor={`ingredient-list-${ingredientType}-${i}`}>
                            <h3 className='ingredient-list__title' >
                                <span>{filteredData.length}</span>
                                <span>{ingredientType}</span>
                                
                            </h3>
                            <div className="ingredient-list__icon">
                                &nbsp;
                            </div>
                        </label>
                        <IngredientItem key={i} handleChecked={handleChecked} ingredientValue={filteredData} />
                </div>
                
            )})}
        </div>
    )
}

IngredientList.propTypes = {

}

export default IngredientList
