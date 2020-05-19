import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBox({ searchHandler}) {
    const [searchValue, setSearchValue] = useState('')

    // const search = (e) =>{
    //     setSearchValue(e.target.value)
    // }

    return (
        <div className="search-box">
            <input 
                type='search' 
                placeholder='Search for Ingredients.....'
                name='search' 
                id='search' 
                onChange={searchHandler}
                className='search-box__input'/>
            <label htmlFor='search' className='search-box__label'>
                <FontAwesomeIcon 
                    size="2x"
                    icon={faSearch}
                    className='search-box__icon'
                    />
            </label>
        </div>
    )
}
