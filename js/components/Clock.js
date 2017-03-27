'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import css from '../../css/clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            started: false
        };
        this.timerID = null;
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        this.setState({
            started: true
        });
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    stopTimer() {
        clearInterval(this.timerID);
        this.setState({
            started: false
        });
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }

    tick() {
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (seconds == 59) {
            seconds = 0;
            minutes += 1;
        } else {
            seconds += 1;
        }

        this.setState({
            minutes: minutes,
            seconds: seconds
        });
    }

    render() {
        let seconds = this.state.seconds;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }



        return (
            <div styleName="wrapper" data-started={(this.state.started) ? true : null}>
                <h2>{this.state.minutes}:{seconds}
                    {this.state.started && <button className="btn btn-success" onClick={this.stopTimer}>Pause</button>}
                    {!this.state.started && <button className="btn btn-success" onClick={this.startTimer}>Start</button>}
                </h2>
            </div>
        );
    }
}

export default CSSModules(Clock, css);