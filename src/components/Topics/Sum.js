import React, { Component } from 'react';

class Sum extends Component {

    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleNum1Update(val) {
        this.setState({ 
            number1: parseInt(val, 10) 
        });
    }

    handleNum2Update(val) {
        this.setState({ 
            number2: parseInt(val, 10) 
        });
    }

    handleSum(num1, num2) {
        this.setState({ 
            sum: num1 + num2 });
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input 
                    className="inputLine" 
                    onChange={(e) => this.handleNum1Update(e.target.value)}
                />
                <input 
                    className="inputLine" 
                    onChange={(e) => this.handleNum2Update(e.target.value)}
                />
                <button 
                    className="confirmationButton" 
                    onClick={() => this.handleSum(this.state.number1, this.state.number2)}
                > 
                    Add 
                </button>
                <span 
                    className="resultsBox"
                > 
                    Sum: {this.state.sum} 
                </span>
            </div>
        )
    }
}

export default Sum;