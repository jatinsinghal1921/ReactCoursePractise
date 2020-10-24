import React, {useEffect, useRef, useContext} from 'react';
import classes from './cockpit.css';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context'


const cockpit = (props) => {    
    
    const toggleButtonRef = useRef(null);
    const authChange = useContext(AuthContext);


    useEffect(() => {
        console.log("[Cockpit.js] useEffect...")
        console.log(authChange.authenticated);
        // setTimeout(() => {
        //     alert("Saved Data to cloud")
        // }, 1000);

        toggleButtonRef.current.click();
        return (() => {
            console.log("[Cockpit.js] useEffect Return Statement...")
        })
    }, [])

    let button_class = "";
    if (props.showPersons){
        button_class = classes.Red;
    }

    const classes_list = [];
    if (props.personsLength <= 2) {
        classes_list.push(classes.red)
        if (props.personsLength <= 1) {
            classes_list.push(classes.bold)
        }
    }    
    
    return (
    <div className={classes.Cockpit}>
            <h1><b>{props.title}</b></h1>
        <p className={classes_list.join(" ")}>This is really working!</p>
        <button className={button_class} ref={toggleButtonRef} onClick={props.clicked}>Toggle Persons</button>
        <button onClick={authChange.login}>Login</button>
    </div>
    )
}


cockpit.propTypes = {
    title : PropTypes.string,
    clicked : PropTypes.func,
    personsLength : PropTypes.number,
    showPersons : PropTypes.bool
}

export default React.memo(cockpit);