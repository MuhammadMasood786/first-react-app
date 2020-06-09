import React from 'react';


const FirstComponent = (props) => {
    return (
        <div>
            <h1>Hello, World.</h1>
            <h4>I'm {props.Name}</h4>
            <h4>Student of {props.Dept}</h4>
            <p>{props.Uni}</p>
        </div>
    );
}

export default FirstComponent;


