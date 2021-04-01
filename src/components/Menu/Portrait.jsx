import React from 'react';
import PropTypes from 'prop-types'
import '../../styles/portrait.css'
import '../../styles/homepage.css'

import ig from "../../img/socials/ig.png";

class Portrait extends React.Component{
    constructor(props) {
        super(props);

        Portrait.propTypes = {
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            pic: PropTypes.string.isRequired,
        };
    }

    render() {
        const {
            name,
            title,
            link,
            pic,
        } = this.props;

        return(
            <div className="portraits">

                <div className="portrait-box">

                    <div className="portraits-profile">
                        <img src={pic}/>
                    </div>

                    <div className="name">
                        <p>{name}</p>
                    </div>
                    <div className="title">
                        <p>{title}</p>
                    </div>

                    <div className="portraits-ig">
                        <a href={link}>
                            <img src={ig}/>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Portrait;