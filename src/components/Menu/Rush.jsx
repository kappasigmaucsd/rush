import Timer from "../Tools/Timer";
import Vimeo from "@u-wave/react-vimeo";
import React from "react";
import ig from "../../img/socials/ig.png";

const Rush = () => {
    return (
        <div>
            <div className="rush">
                <Timer/>

                <div className="signup">
                    <a href="https://forms.gle/1Zo6HvkRMziWQemKA">>Click here to sign up for rush</a>
                </div>

                <Vimeo
                    video="https://vimeo.com/524583682"
                    autoplay
                    muted
                    height="300"
                    width="375"
                />
            </div>
            <div className="rush-contact">
                <h2>Events: </h2>
                <p>Day 1 (4/5): House tours / meet the bros 7pm PST</p>
                <p>Day 2 (4/6): Game night / meet the bros 7pm PST</p>
                <p>Ring of Fire (4/7): invite only </p>
                <p>Interviews (4/8): invite only </p>
                <br/>

                <h2>Rush Chairs:</h2>

                <p>Fernando Vazquez</p>
                <p>(831) 334-9547</p>
                <a href="https://www.instagram.com/itsfernanflow/">
                    <img src={ig} width="70" alt="Instagram"/>
                </a>

                <p>Christian Velasquez</p>
                <p>(323) 926-6928</p>
                <a href="https://www.instagram.com/chris.rar/">
                    <img src={ig} width="70" alt="Instagram"/>
                </a>

            </div>

        </div>
    )
};

export default Rush;