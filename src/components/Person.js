import React, {Component} from 'react';

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }

    age = (e) => {
        this.setState({age : this.state.age + 1});
    }

    render() {
        return (
            <div>
                <h1 className="person-name">{this.props.lastname}, {this.props.firstname}</h1>
                    <p className="person-age">Age: {this.state.age}</p>
                    <button onClick = {this.age}>Birthday Button</button>
                    <p className="person-hair-color">Hair Color: {this.props.hair}</p>
            </div>
        );
    }
}

export default Person;