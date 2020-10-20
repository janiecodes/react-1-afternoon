import React, { Component } from "react";

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            candy: ['Snickers', 'Oreos', 'Skittles', 'Twix'],
            userInput: '',
            filteredCandy: []
        };
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterCandy(userInput){
        let candy = this.state.candy;
        let filteredCandy = [];
        
        for(let i = 0; i < candy.length; i++){
            if(candy[i].includes(userInput)){
                filteredCandy.push(candy[i]);
            }
        }
        this.setState({filteredCandy: filteredCandy})

    }

    render(){
        return (
            <div className="puzzleBox filtersStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Candy: { JSON.stringify(this.state.candy, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filterCandy(this.state.userInput)}>Filter</button>
                <span classNAme="resultsBox filterStringRB">Filtered Candy: { JSON.stringify(this.state.filteredCandy, null, 10) } </span>
            </div>
        )
    }
}

export default FilterString;