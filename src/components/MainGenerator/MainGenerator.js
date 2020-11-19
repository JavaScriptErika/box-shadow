import React, { Component } from 'react';
import ClearAllButton from './ClearAllButton'; 
import ClassOrIDInput from './ClassOrIDInput';
import ElementType from './ElementType';
import CssRule from './CssRule';
import SaveViewButton from './SaveViewButton'

function MainGenerator(props) {
    return (
        <div className="App">
            <h1>Main Generator</h1>
            <ClearAllButton />
            <ClassOrIDInput classOrID={props.classOrID} handleInputChange={props.handleInputChange} />
            <ElementType elementType={props.elementType} handleInputChange={props.handleInputChange} />

            <CssRule
                cssRuleType={props.boxShadowRule}
                handleInputChange={props.handleInputChange}
                name='boxShadowRule'
                title='CSS Rule'
            />
            <CssRule
                cssRuleType={props.hoverRule}
                handleInputChange={props.handleInputChange}
                name='hoverRule'
                title={props.elementType + ":hover"}
            />
            <SaveViewButton />
        </div>
    );
}

export default MainGenerator;