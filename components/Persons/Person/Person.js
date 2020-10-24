import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component{

    constructor(props)
    {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        console.log(this.context.authenticated);
        this.inputElementRef.current.focus();
    }

    render(){
        console.log("[Person.js] SubChildRendering...")
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                {this.context.authenticated ? " -- Authenticated --- " : " -- Please Login--" }
                <p>{this.props.children}</p>
                <input 
                type="text" 
                // ref={(inputEle) => {this.inputElement = inputEle}}
                ref = {this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func 
}

export default withClass(Person, classes.Person);