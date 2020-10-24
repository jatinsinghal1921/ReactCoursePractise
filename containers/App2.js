import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Ram", age: "26"},
      { id: "2",name: "Shubham",age: "25"},
      { id: "3",name: "Jatin", age: "24"}
    ],
    togglePersons : true
  }

  deletePersonHandler = (personId) => {
    const persons = [...this.state.persons];
    persons.splice(personId, 1);
    this.setState({persons : persons});
  }

  nameChangedHandler = (event,personId) => {
    const newName = event.target.value;
    const index = this.state.persons.findIndex(person => {
      return person.id === personId;
    })
    const persons = [...this.state.persons];
    persons[index].name = newName;
    this.setState({persons : persons});
  }

  togglePersonHandler = () => {
    const toggleState = this.state.togglePersons;
    this.setState({togglePersons : !toggleState})
  }


  render() {

    let person;

    if (this.state.togglePersons){
      person = (
        <div className="row">
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changeName={(event) => this.nameChangedHandler(event,person.id)}
            />
          })}
        </div>
      )
    }


    return (
      <div className="container App">
        <h1>Hi, I am React App</h1>  
        <p> This is working !!!</p>
        <button onClick={this.togglePersonHandler}>Toggle Persons</button>
        {person}
      </div>
    );
  }
}

export default App;