import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      resultCount: 0
    };
  }

    onChangeSize = (value) => {
      this.setState({
        resultCount : this.state.fontCount + value
    });
  }

  onSettingDefault = (value) => {
      if(value) {
      this.setState({
        resultCount: 0 
      });
    }
  }

  render() {
    return (
        <div className = "container">
            <div>
                <Result
                    fontCount= { this.state.fontCount }
                /> 
                <Reset onSettingDefault={ this.onSettingDefault }/>            
            </div>
                <Button fontCount= { this.state.fontCount }/>
        </div>
    )
  }
}

export default App;
