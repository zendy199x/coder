import React, { Component } from 'react';

class Button extends Component {

  changeCount(value) {
    this.props.resultCount(value)
  }

  render() {
    return (
      <div>
          <button onClick={ () => this.changeCount(-1) }>Giảm</button>&nbsp;
          <button onClick={ () => this.changeCount(1) }>Tăng</button>
      </div>
    );
  }
}

export default Button;