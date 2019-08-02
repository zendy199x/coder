import React, { Component } from 'react';

class Reset extends Component {

  onResetDefault = () => {
    this.props.onSettingDefault(true);
  }

  render() {
    return (
      <button onClick={ this.onResetDefault }>Reset</button> 
    );
  }
}

export default Reset;