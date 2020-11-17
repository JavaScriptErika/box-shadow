import React, { Component } from 'react';
import Header from './components/Header'
import MainGenerator from './components/MainGenerator/MainGenerator'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classOrIdVal: '' }
    }

    handleClassOrIdChange = (e) => {
        this.setState({
            classOrIdVal: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <MainGenerator classOrIdVal={this.state.classOrIdVal} handleClassOrIdChange={this.handleClassOrIdChange} />

            </div>
        );
    }
}

export default App;
