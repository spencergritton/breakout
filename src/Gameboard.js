import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ball from "./Ball"
import Brick from "./Brick"
import Paddle from "./Paddle"

class Gameboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ballHW: 20,
            ballX: 200,
            ballY: 50,
            ballXSpeed: -6,
            ballYSpeed: 8,

            paddleX: 175,
            paddleY: 650,
            paddleWidth: 100,
            paddleHeight: 20,
            paddleMoveSpeed: 10
        };
      }

    checkWallCollisions() {
        if (this.state.ballX <= 20 || this.state.ballX >= 400) {
            this.setState({
                ballXSpeed: this.state.ballXSpeed*-1
            });
        }
        if (this.state.ballY <= 20 || this.state.ballY >= 700) {
            this.setState({
                ballYSpeed: this.state.ballYSpeed*-1
            });
        }
    }

    checkPaddleCollisions() {

        // if the Y of the ball aligns with the Y of the paddle
        if (this.state.ballY >= this.state.paddleY-this.state.paddleHeight && this.state.ballY <= this.state.paddleY+this.state.paddleHeight) {
            if (this.state.ballX+this.state.ballHW >= this.state.paddleX && this.state.ballX <= this.state.paddleX+this.state.paddleWidth) {
                this.setState({
                    ballYSpeed: this.state.ballYSpeed*-1
                });
                return;
            }
        }

        if (this.state.ballX == this.state.paddleX ) {
            if (this.state.ballY >= this.state.paddleY-this.state.paddleHeight && this.state.ballY <= this.state.paddleY+this.state.paddleHeight) {
                this.setState({
                    ballXSpeed: this.state.ballXSpeed*-1
                });
                return;
            }
        }
        if (this.state.ballX == this.state.paddleX+this.state.paddleWidth) {
            if (this.state.ballY >= this.state.paddleY-this.state.paddleHeight && this.state.ballY <= this.state.paddleY+this.state.paddleHeight) {
                this.setState({
                    ballXSpeed: this.state.ballXSpeed*-1
                });
                return;
            }
        }
        if (this.state.ballX + this.state.ballHW >= this.state.paddleX && this.state.ballX <= this.state.paddleX+this.state.paddleWidth) {
            if (this.state.ballY >= this.state.paddleY-this.state.paddleHeight && this.state.ballY <= this.state.paddleY+this.state.paddleHeight) {
                this.setState({
                    ballXSpeed: this.state.ballXSpeed*-1
                });
            }
        }
    }

    update() {

        this.checkWallCollisions();

        this.checkPaddleCollisions();

        this.setState({
            ballX: this.state.ballX+this.state.ballXSpeed,
            ballY: this.state.ballY+this.state.ballYSpeed
        });
    }

    handleKeyPress = (event) => {
        if(event.key == 'ArrowRight' || event.key == 'd'){
            //Moving right
            if (this.state.paddleX+this.state.paddleMoveSpeed+this.state.paddleWidth<420) {
                this.setState({
                    paddleX: this.state.paddleX+this.state.paddleMoveSpeed
                });
            }
          }
        if(event.key == 'ArrowLeft' || event.key == 'a'){
            //Moving left
            if (this.state.paddleX-this.state.paddleMoveSpeed>20) {
                this.setState({
                    paddleX: this.state.paddleX-this.state.paddleMoveSpeed
                });
            }
        }
    }

    render() {

        return (
        <div 
            className="Gameboard"> 

            <Ball
                x={this.state.ballX}
                y={this.state.ballY}
                hw={this.state.ballHW} />

            <Paddle
                x={this.state.paddleX}
                y={this.state.paddleY}
                height={this.state.paddleHeight}
                width={this.state.paddleWidth} />
        
        </div> )
    }

    componentDidMount() {

        setInterval( () => 
        {
            this.update();
         }
         , 16)

         // Listener for keys being pressed down
         window.addEventListener("keydown", this.handleKeyPress, true);

    }

  }

  export default Gameboard;