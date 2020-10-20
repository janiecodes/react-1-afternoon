import React, { Component } from "react";

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            familyUnfiltered: [
                {
                    name: 'Janie Kim',
                    favColor: 'Yellow',
                    lovesCode: true
                },
                {
                    name: 'Alan Kim',
                    age: 27,
                    city: 'Seoul'
                },
                {
                    name: 'Michelle Kim',
                    age: 23,
                    favColor: 'Orange',
                }
            ],
            userInput: '',
            familyFiltered: []
        }
    }

    handleChange(val){
        this.setState({userInput:val});
    }    
    
    filterFamily(prop){
        let family = this.state.familyUnfiltered;
        let familyFiltered = [];

        for (let i = 0; i < family.length; i++){
            if(family[i].hasOwnProperty(prop)){
                familyFiltered.push(family[i])
            }
        }
        this.setState({familyFiltered: familyFiltered});
    }
    
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.familyUnfiltered, null, 10) } </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterFamily(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.familyFiltered, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;