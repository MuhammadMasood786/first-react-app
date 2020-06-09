import React from 'react';


const FirstComponent = (props) => {
    return (
        <div>
            <p>I'm {props.Name}</p>
            <p>Student of {props.Dept}</p>
            <p>{props.Uni}</p>
        </div>
    );
}

export default FirstComponent;


