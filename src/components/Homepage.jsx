import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/homepage.css'

/* Burger menu */
import Navbar from "./Nav/Navbar";

/* import homepage components */
import Opening from "./Menu/Opening";
import Home from "./Menu/Home";
import About from "./Menu/About";
import Rush from "./Menu/Rush";
import Leadership from "./Menu/Leadership";
import ContactForm from "./Menu/ContactForm";

/* images */
import crest from '../img/crest.png'

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            done : false,
            history: null,
        };

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({done: true});
        }, 3000)
    }

    render() {
        const { done } = this.state;
        return (
            <>
            { done === true ? (
            <div>
                <Router>
                    <Navbar />
                    <div className="filler"/>
                    <div className="main">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/rush">
                                <Rush />
                            </Route>
                            <Route exact path="/leadership">
                                <Leadership />
                            </Route>
                            <Route exact path="/contact">
                                <ContactForm />
                            </Route>
                        </Switch>
                    </div>
                </Router>

                <div className="filler"/>

                <footer className="footer">
                    <p>Pi-Psi Chapter of</p>
                    <p>Kappa Sigma</p>
                    <img src={crest} alt="Kappa Sigma Crest" width="100" height="150"/>
                    <p>@2021 by Kappa Sigma</p>
                </footer>
            </div>
            ) : ( <Opening/> )}
            </>
        );
    }
}

export default Homepage;