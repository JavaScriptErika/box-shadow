import React, { Component } from 'react';
import ClearAllButton from './ClearAllButton'; 
import ClassOrIDInput from './ClassOrIDInput';
import ElementType from './ElementType';

function MainGenerator(props) {
    return (
        <div className="App">
            <h1>Main Generator</h1>
            <ClearAllButton />
            <ClassOrIDInput classOrID={props.classOrID} handleInputChange={props.handleInputChange} />
            <ElementType elementType={props.elementType} handleInputChange={props.handleInputChange} />
        </div>
    );
}

export default MainGenerator;