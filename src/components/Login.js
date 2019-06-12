import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Login Component DidMount");
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/home">home</Link>
      </div>
    )
  }
}