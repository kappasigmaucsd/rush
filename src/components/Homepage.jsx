import React from 'react';
import '../styles/homepage.css'

import Tabs from "./Tabs";
import crest from '../img/crest.png'

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            time: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        };
    }

    componentDidMount() {
        let timeLeftVar = setInterval(this.countDown, 1000);
        this.setState({ time: timeLeftVar });
    }

    calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`04/05/${year}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    countDown =()=> {
        let timeLeft = this.calculateTimeLeft();

        if (Object.keys(timeLeft).length !== 0) {
            this.setState({
                time: timeLeft,
            });
        }  else {
            clearInterval(this.timer);
        }
    }

    renderTime = () => {
        return Object.entries(this.state.time).map(([key, value], i) => {
            return (
                <div key={key}>

                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Kappa Sigma</h1>
                </div>

                <div className="body">
                    <h1>Fuck Pike</h1>
                </div>

                <div className="footer">
                    <p>Pi-Psi Chapter of</p>
                    <p>Kappa Sigma</p>
                    <img src={crest} alt="Kappa Sigma Crest"/>
                    <p>@2021 by Kappa Sigma</p>
                </div>
            </div>
        );
    }
}

export default Homepage;