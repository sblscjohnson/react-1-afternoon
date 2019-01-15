import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                {name: `Bob`,
                relation: `dad`,
                age: 62
                },
                {name: `Kathy`,
                relation: `mom`,
                job: `CFO`
                },
                {name: `Mack`,
                relation: `sister`,
                hair: `brown`
                }
            ],
            userInput: ``,
            filteredArray: []
        }
    }

    handleInput(val) {
        this.setState({
            userInput: val 
        });
    }

    famFilter(prop) {
        let family = this.state.unfilteredArray;
        let filteredFamily = [];
    
        for (let i = 0; i < family.length; i++) {
            if (family[i].hasOwnProperty(prop)) {
            filteredFamily.push(family[i]);
            }
        }

        this.setState({
        filteredArray: filteredFamily
        });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span 
                className="puzzleText"
            > 
                Original: {JSON.stringify(this.state.unfilteredArray)} 
            </span>
            <input 
            className="inputLine" 
            onChange={(e) => this.handleInput(e.target.value)} 
            />
            <button 
            className="confirmationButton" 
            onClick={() => this.famFilter(this.state.userInput)}
            >
            Filter
            </button>
            <span 
                className="resultsBox filterObjectRB"
            > 
                Filtered: {JSON.stringify(this.state.filteredArray)} 
            </span>
            </div>
        )
    }
}

export default FilterObject;