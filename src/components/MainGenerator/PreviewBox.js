
import React, { Component } from 'react';


class PreviewBox extends Component {

    constructor(props) {
        super(props)
    }

    handleOnChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                Preview Box!
            </div>
        )
    }

}

export default PreviewBox;