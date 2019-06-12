import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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
        <h1>Home</h1>
        <Link to="/hello">Hello</Link>
      </div>
    )
  }
}

export default Home;