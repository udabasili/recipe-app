import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../components/searchbox.component';
import IngredientList from '../components/ingredient-list.component';
import ResultList from '../components/result-list.component';

class SearchPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchData:"",
            usersChoices:[]
        }
    }

    searchFunction = (e) =>{
        let input = e.target.value
        this.setState({
            searchData: input
        })
    }

    handleChecked = (item, e) => {
        let isChecked = e.target.checked
        this.setState((prevState) => ({
            ...prevState,
            usersChoices:isChecked ? [...prevState.usersChoices, item]
                : prevState.usersChoices.filter((choice) => choice !== item )
        })
        )
    }
    
    render() {
        const {searchData, usersChoices} = this.state
        return (
            <div className='search-page'>
                <section className='search-page__left-section'>
                   <SearchBox searchHandler={this.searchFunction}/>
                    <IngredientList searchData={searchData} handleChecked={this.handleChecked}/>
               </section> 
                <section className='search-page__right-section'>
                    <ResultList userChoices={usersChoices} />
               </section> 
            </div>
        );
    }
}

SearchPage.propTypes = {

};

export default SearchPage;