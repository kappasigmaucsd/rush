import React from 'react';
import PropTypes from 'prop-types'

import '../styles/homepage.css'

import ig from "../img/ig.png";
import fb from "../img/fb.png";
import yt from "../img/yt.png";

class Links extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div className="links">
                <div className="column">
                    <a href="https://www.instagram.com/kappasigmaucsd/">
                        <img src={ig} width="70"/>
                    </a>
                </div>
                <div className="column">
                    <a href="https://www.facebook.com/ucsdkappasig/">
                        <img src={fb} width="50"/>
                    </a>
                </div>
                <div className="column">
                    <a href="https://www.youtube.com/channel/UCB_P3xornSa5kcIry7kJI5g">
                        <img src={yt} width="65"/>
                    </a>
                </div>
            </div>
        );

    }
}

export default Links;