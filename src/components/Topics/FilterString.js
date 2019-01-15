import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                `Henry`, 
                `Del`, 
                `Grant`, 
                `Joe`, 
                `Marty`, 
                `Matt`
            ],
            userInput: ``,
            filteredArray: []
         };
    }

    handleInput(val) {
        this.setState({
            userInput: val 
        });
    }

    filterArr(userInput) {
        let names = this.state.unfilteredArray;
        let filtered = [];

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filtered.push(names[i]);
            }
        }

        this.setState({ 
            filteredArray: filtered 
        });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span 
                    className="puzzleText"
                > 
                    People: {JSON.stringify(this.state.unfilteredArray) } 
                </span>
                <input 
                    className="inputLine" 
                    onChange={(e) => this.handleInput(e.target.value)}
                />
                <button 
                    className="confirmationButton" 
                    onClick={() => this.filterArr(this.state.userInput)}
                > 
                    Filter 
                </button>
                <span 
                    className="resultsBox filterStringRB"
                > 
                Filtered Names: {JSON.stringify(this.state.filteredArray)} 
                </span> 
            </div>
        )
    }
}

export default FilterString