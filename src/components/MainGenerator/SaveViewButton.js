import React, { Component } from 'react';

class SaveViewButton extends Component {

    constructor(props) {
        super(props)
    }

    handleOnClick = (e) => {
        this.props.handleSaveViewClick(e);
    }



    render() {
        return (
            <div className="App">
                <button onClick={this.handleOnClick}>Save</button>
            </div>
        );
    }
}

export default SaveViewButton;