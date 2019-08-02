import React, { Component } from 'react';

class Result extends Component {

  setStyle() {
    return {
      resultCount : this.props.resultCount
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.props.resultCount }</p>
      </div>
    );
  }
}

export default Result;