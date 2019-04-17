import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ball extends Component {

    render() {
        
        const styles = {
            left: this.props.x,
            top: this.props.y,
            width: this.props.hw,
            height: this.props.hw
        }
        
      return (<div className="Ball" style={styles}> </div>);
    }
}

export default Ball;