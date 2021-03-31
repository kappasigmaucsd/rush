import React from 'react';
import glitch from '../img/moshed_crest.gif'
import '../styles/loader.css'

class Opening extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
                <div className="loader fadeOut">
                    <img src={glitch} alt="crest" className="center"/>
                </div>
        );
    }
}

export default Opening;