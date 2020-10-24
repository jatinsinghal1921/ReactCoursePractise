import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    
    const [personState, setPersonState] = useState({
        persons: [
            { name: "Ram", age: "26" },
            { name: "Shubham", age: "25" },
            { name: "Jatin", age: "24" }
        ]
    })

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { name: "Ram", age: "26" },
                { name: "Shubham", age: "25" },
                { name: "Jai Sri Ram", age: "30" }
            ]
        })
    }

    return (
        <div className="App">
        <h1>Hi, I am React App</h1>  
        <p> This is working !!!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>This is awesome</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
        </div>
    );
}

export default App;

