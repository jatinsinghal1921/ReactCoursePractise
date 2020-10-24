import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent{

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Persons.js] shouldComponentUpdate...");
    //     if (nextProps.persons !== this.props.persons ||
    //          nextProps.clicked !== this.props.clicked || 
    //          nextProps.changed !== this.props.changed){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate...");
        return {message : "Scroll Coordinates"};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("[Persons.js] componentDidUpdate...");
        console.log(snapshot);
    }

    componentDidMount(){
        console.log("[Persons.js] componentDidMount...");
    }

    componentWillUnmount(){
        console.log("[Persons.js] componentWillUnmount...")
    }


    render(){
        console.log("[Persons.js] ChildRendering... ")
        return(
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            })
        )
    }
}

export default Persons;