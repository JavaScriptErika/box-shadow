import React, { Component } from 'react';
import ClearAllButton from './ClearAllButton'; 
import ClassOrIDInput from './ClassOrIDInput';

function MainGenerator(props) {
    return (
        <div className="App">
            <h1>Main Generator</h1>
            <ClearAllButton />
            <ClassOrIDInput />
        </div>
    );
}

export default MainGenerator;