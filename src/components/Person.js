import React, {Component} from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <h1 className="person-name">{this.props.lastname}, {this.props.firstname}</h1>
                    <p className="person-age">Age: {this.props.age}</p>
                    <p className="person-hair-color">Hair Color: {this.props.hair}</p>
            </div>
        );
    }
}

export default Person;