import React, { Component } from 'react';


class ClassOrIDInput extends React.Component {

    constructor(props) {
        super(props)
    }

    handleOnChange = (e) => { 
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                <label> CSS Class or ID: 
                    <input type="text" value={this.props.classOrID} onChange={this.handleOnChange} name="classOrID"/>
                </label>
            </div>
        )
    }
    
}

export default ClassOrIDInput;