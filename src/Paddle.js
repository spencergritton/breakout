import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Paddle extends Component {

    render() {

      const styles = {
        left: this.props.x,
        top: this.props.y,
        width: this.props.width,
        height: this.props.height
      }

      return <div className="Paddle" style={styles}> </div>;
    }
  }

  export default Paddle;