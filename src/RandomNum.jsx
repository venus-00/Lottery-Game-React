import React from 'react';

class RandomNum extends React.Component {
    render() {
        const { randomNumbers } = this.props;

        return (
            <div className="random-ticket">
                <h2>Winner Numbers</h2>
                {randomNumbers.map((num, index) => (
                    <span key={index} className="number-box">
                        {num}
                    </span>
                ))}
            </div>
        );
    }
}

export default RandomNum;
