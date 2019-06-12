import React from 'react';
import { Link } from 'react-router-dom';

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    console.log("Hello Component DidMount");
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/home">Home</Link>
      </div>
    )
  }
}

export default Hello;