import React, { Component } from 'react';
import Header from './components/Header'
import MainGenerator from './components/MainGenerator/MainGenerator'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classOrID: '',
            elementType: 'div',
            boxShadowRule: 'box-shadow: 10px 5px 5px red;',
            hoverRule: 'box-shadow: 10px 5px 20px black;',
            savedViews: [],
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSaveViewClick = (e) => {
        e.preventDefault();

        let addSavedView = this.state.savedViews.slice();
        addSavedView.push({
            'classOrID': this.state.classOrID,
            'elementType': this.state.elementType,
            'boxShadowRule': this.state.boxShadowRule,
            'hoverRule': this.state.hoverRule
        });

        this.setState({
            savedViews: addSavedView
        })

    }

    render() {
        return (
            <div className="App">
                <Header />
                <MainGenerator
                    classOrID={this.state.classOrID}
                    elementType={this.state.elementType}
                    handleInputChange={this.handleInputChange}
                    boxShadowRule={this.state.boxShadowRule}
                    hoverRule={this.state.hoverRule}
                    handleSaveViewClick={this.handleSaveViewClick}
                />
                <ul>{this.state.savedViews.map(view => <li>{view.classOrID + view.elementType + view.boxShadowRule + view.hoverRule}</li>)}</ul>
            </div>
        );
    }
}

export default App;
