import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super();   
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleInput(val) {
        this.setState({
            userInput: val 
        });
    }
    
    handleSplitNums(userInput) {
        let newArr = userInput.split(',');
        let evenSplit = [];
        let oddSplit = [];
    
        for ( var i=0; i<newArr.length; i++ ) {
          if ( newArr[i] % 2 === 0 ) {
            evenSplit.push(parseInt(newArr[i], 10));
          } 
          else {
            oddSplit.push(parseInt(newArr[i], 10));
          }
        }
        
        this.setState({ 
            evenArray: evenSplit, 
            oddArray: oddSplit 
        });
    }
    
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) =>      
                    this.handleInput(e.target.value)} 
                />
                <button 
                    className="confirmationButton" 
                    onClick={() => 
                    {this.handleSplitNums(this.state.userInput)
                    }}
                > 
                    Split 
                </button>
                <span 
                    className="resultsBox"> 
                    Evens: {JSON.stringify(this.state.evenArray)} 
                </span>
                <span 
                    className="resultsBox"
                > 
                    Odds: {JSON.stringify(this.state.oddArray)} 
                </span>
            </div>
        )
    }
}

    export default EvenAndOdd;