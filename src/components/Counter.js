import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    console.log("Home Component DidMount");
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-header text-center">
         <span>0</span>
        </div>
        <div className="panel-body text-center">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default">+</button>
            <button type="button" className="btn btn-default">-</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;