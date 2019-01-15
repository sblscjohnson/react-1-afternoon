import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ``,
            palindrome: ``
        };
    }

    handleInput(val) {
        this.setState({
            userInput: val 
        });
    }

    handleCheckPalindrome(userInput) {
        let normalWay = userInput;
        let reversedWay = normalWay.split(``);
        reversedWay = reversedWay.reverse();
        reversedWay = reversedWay.join(``);

        if (normalWay === reversedWay) {
            this.setState({
                palindrome: 'true'
            });
        } 
        else {
            this.setState({ 
                palindrome: 'false'
            });
        }
    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input 
                className="inputLine" 
                onChange={(e) => this.handleInput(e.target.value)} 
            />
            <button 
                className="confirmationButton" 
                onClick={() => this.handleCheckPalindrome(this.state.userInput)}
            > 
                Check 
            </button>
            <span 
            className="resultsBox"
            > 
            Palindrome: {this.state.palindrome}
             </span>
            </div>
        )
    }
}

export default Palindrome;