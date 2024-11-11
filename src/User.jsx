import React from 'react';

class User extends React.Component {
    render() {
        const { userNumbers, handleInputChange } = this.props;

        return (
            <div className="user-ticket">
                <h2>Your Ticket</h2>
                {userNumbers.map((num, index) => (
                    <input
                        key={index}
                        type="number"
                        min="1"
                        max="20"
                        value={num}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        className="number-input"
                    />
                ))}
            </div>
        );
    }
}

export default User;