import React from 'react';

import '../../styles/homepage.css'

import ig from "../../img/socials/ig.png";
import fb from "../../img/socials/fb.png";
import yt from "../../img/socials/yt.png";

class Links extends React.Component{

    render() {
        return(
            <div className="links">
                <div className="column">
                    <a href="https://www.instagram.com/kappasigmaucsd/">
                        <img src={ig} width="70" alt="Instagram"/>
                    </a>
                </div>
                <div className="column">
                    <a href="https://www.facebook.com/ucsdkappasig/">
                        <img src={fb} width="50" alt="Facebook"/>
                    </a>
                </div>
                <div className="column">
                    <a href="https://www.youtube.com/channel/UCB_P3xornSa5kcIry7kJI5g">
                        <img src={yt} width="65" alt="Youtube"/>
                    </a>
                </div>
            </div>
        );

    }
}

export default Links;