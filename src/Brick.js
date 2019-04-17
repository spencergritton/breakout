import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Brick extends Component {

    render() {
      return <div className="Brick"> {this.props.value} </div>;
    }
  }

  export default Brick;