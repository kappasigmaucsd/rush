import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import '../styles/homepage.css'

import Tabs from "./TabGroup";
import Timer from "./Timer";
import Portrait from "./Portrait";
import Links from "./Links";
import ContactForm from "./ContactForm";
import Opening from "./Opening";
import Burger from "./Burger";

import crest from '../img/crest.png'
import profile from '../img/Circle_Logo.png'
import clip from '../img/Covid_Hype.mp4'
import group from '../img/group_pic_top.JPG'


/* Executive Board images */
import GM from '../img/adam.JPG'
import GP from '../img/liam.jpg'
import GMC from '../img/Image from iOS.png'
import GS from '../img/roberto.jpg'
import GT from '../img/tony.jpg'


class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            done : false,
        };

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({done: true});
        }, 3000)
    }


    render() {

        return (
            <>
            { this.state.done === true ? (
            <div>
                <div className="header">
                    <img src={profile} width="100"/>
                </div>

                <div className="main">

                    <Tabs>
                        <div label="Home">
                            <div className="home">
                                <video autoPlay loop muted playsInline>
                                    <source src={clip} type="video/mp4"/>
                                    test
                                </video>
                            </div>
                        </div>

                        <div label="About">
                            <div className="about">
                                <img src={group}/>
                                <p>Fellowship, Leadership, Scholarship, Service. These are the four pillars of Kappa Sigma.</p>

                                <p>
                                    The Pi-Psi chapter of Kappa Sigma was founded in 2009. Since then, the chapter has strived for greatness.
                                    Kappa Sigma aims to give brothers the best undergraduate experience and prepare them from life after graduation.
                                    From academic support for current members, networking with alumni, and preparation for graduate programs, Kappa Sigma creates excellence.
                                </p>
                                <p>
                                    Kappa Sigma has 16000 active brothers in 305 chapters. We have raised over $12 million in the past four years.
                                    Kappa Sigma truly is a brotherhood like no other. Number one, second to none.
                                </p>
                                <p>
                                    A.E.K.Δ.B.
                                </p>
                            </div>

                           <Links/>
                        </div>

                        <div label="Rush">

                            <Timer/>
                            {/*<video controls autoPlay loop playsInline muted preload>
                                <source src={rush_video} type="video/mp4"/>
                            </video>
                            <iframe width="420"  height="345" src="https://www.youtube.com/embed/q_7fvPFSwOk?autoplay=1&mute=1"/>*/}

                            <Vimeo
                                video="https://vimeo.com/524583682"
                                autoplay
                                muted
                                height="300"
                                width="375"
                            />

                        </div>

                        <div label="Leadership">
                            <div className="executive-year">
                                <p>2020 - 2021 Executive Board</p>
                            </div>

                            <Portrait
                                name="Adam Tyler"
                                title="Grand Master"
                                pic={GM}
                                link="https://www.instagram.com/ayyyitsadam/"
                            />

                            <Portrait
                                name="Liam Stone"
                                title="Grand Procurator"
                                link="https://www.instagram.com/liamstone1814/"
                                pic={GP}
                            />

                            <Portrait
                                name="Jose Falconi"
                                title="Grand Master of Ceremonies"
                                link="https://www.instagram.com/_jossaaa_/"
                                pic={GMC}
                            />

                            <Portrait
                                name="Roberto Medina"
                                title="Grand Scribe"
                                link="https://www.instagram.com/_.rmedina._/"
                                pic={GS}
                            />

                            <Portrait
                                name="Tony De Alba"
                                title="Grand Treasurer"
                                link="https://www.instagram.com/t_de_alba/"
                                pic={GT}
                            />

                        </div>

                        <div label="Contact">
                            <ContactForm/>
                        </div>

                    </Tabs>

                </div>

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