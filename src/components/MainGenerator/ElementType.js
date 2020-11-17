
import React, { Component } from 'react';


class ElementType extends Component {

    constructor(props) {
        super(props)
    }

    handleOnChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                <label><input type="radio" value="div" name="elementType" checked={this.props.elementType === 'div'} onChange={this.handleOnChange} /> div </label>
                <label><input type="radio" value="link" name="elementType" checked={this.props.elementType === 'link'} onChange={this.handleOnChange} /> link </label>
            </div>
        )
    }

}

export default ElementType;