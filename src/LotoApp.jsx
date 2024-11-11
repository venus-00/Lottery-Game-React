import React, { Component } from 'react';
import User from './User';
import RandomNum from './RandomNum';
import './LotoApp.css';

class LotoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Lottery Game",
            userNumbers: Array(6).fill(''),
            randomNumbers: [],
            isWinner: false,
        };
    }

    handleInputChange = (index, value) => {
        const newNumbers = [...this.state.userNumbers];
        newNumbers[index] = value;
        this.setState({ userNumbers: newNumbers });
    };

    generateRandomNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 20) + 1);
        }
        this.setState({ randomNumbers: [...numbers] }, this.checkWin);
    };

    handleSubmit = () => {
        const isValid = this.state.userNumbers.every(
            (num) => Number(num) >= 1 && Number(num) <= 20
        );
        if (isValid && this.state.userNumbers.length === 6) {
            this.generateRandomNumbers();
        } else {
            alert('Please enter 6 valid numbers between 1 and 20.');
        }
    };

    handleReset = () => {
        this.setState({
            userNumbers: Array(6).fill(''),
            randomNumbers: [],
            isWinner: false,
        });
    };

    checkWin = () => {
        const { userNumbers, randomNumbers } = this.state;
        const matchedNumbers = userNumbers.filter(num => randomNumbers.includes(Number(num)));
        const isWinner = matchedNumbers.length === 6;
        this.setState({ isWinner }, () => {
            console.log(isWinner ? "You won!" : "Next time");
        });
    };

    render() {
        return (
            <div className="loto-app">
                <User
                    userNumbers={this.state.userNumbers}
                    handleInputChange={this.handleInputChange}
                />

                <button onClick={this.handleSubmit} className='submit-btn'>
                    Wish Me Luck
                </button>
                <button onClick={this.handleReset} className='reset-btn'>Reset</button>

                {this.state.randomNumbers.length > 0 && (
                    <RandomNum randomNumbers={this.state.randomNumbers} />
                )}

                {this.state.randomNumbers.length > 0 && (
                    <p>{this.state.isWinner ? "Congratulations, you won!" : "Better luck next time!"}</p>
                )}
            </div>
        );
    }
}

export default LotoApp;

