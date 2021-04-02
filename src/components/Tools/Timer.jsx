import React from 'react';

import '../../styles/tools/timer.css'

class Timer extends React.Component {
    constructor(props) {
        super(props);

        Timer.propTypes = {
            time: {},
            seconds: 0,
            timer: 0,
        };

        this.state = { time: {}, seconds: 0};
        this.timer = 0;
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs){
        let days = Math.floor(secs / (60 * 60 * 24))

        let hours = Math.floor(secs / (60 * 60) % 24);

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "d": days,
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let seconds = this.calculateTimeLeft();
        let timeLeftVar = this.secondsToTime(seconds);

        this.setState({ time: timeLeftVar, seconds: seconds });

        if ( this.timer === 0  && seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = Math.abs(+new Date(`4/5/${year}`) - +new Date());

        return (difference / 1000);
    }

    countDown = () => {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;

        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return(
            <div className = "timer">
                {this.state.time.d}D {this.state.time.h}H {this.state.time.m}M {this.state.time.s}S
            </div>
        );
    }
}

export default Timer;

