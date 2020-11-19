
import React, { Component } from 'react';


class CssRule extends Component {

    constructor(props) {
        super(props)
    }

    handleOnChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.title}
                    <textarea value={this.props.cssRuleType} name={this.props.name} onChange={this.handleOnChange} />
                </label>
            </div>
        )
    }

}

export default CssRule;