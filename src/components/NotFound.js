import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
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
      <div>
        <h1>404 NotFound</h1>
        <Link to="/login">login</Link>
      </div>
    )
  }
}

export default NotFound;