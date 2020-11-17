import React, { Component } from 'react';


class ClassOrIDInput extends React.Component {

    constructor(props) {
        super(props)
    }

    handleOnChange = (e) => { 
        this.props.handleClassOrIdChange(e);
    }

    render() {
        return (
            <div>
                <label> CSS Class or ID: 
                    <input type="text" value={this.props.classOrIdVal} onChange={this.handleOnChange} />
                </label>
            </div>
        )
    }
    
}

export default ClassOrIDInput;