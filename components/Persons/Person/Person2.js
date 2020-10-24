import React from 'react';

const person = (props) => {

    const style = {
        "margin" : "20px 5px 0px 0px"
    };

    return (
        <div className="col">
            <div className="card bg-light border-dark" style={style}>
                <div className="card-body">
                    <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
                    <input type="text" onChange={props.changeName} value={props.name}></input>
                </div>
            </div>
        </div>
    )
}

export default person;