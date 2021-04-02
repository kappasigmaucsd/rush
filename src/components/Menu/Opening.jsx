import React from 'react';
import glitch from '../../img/moshed_crest.gif'
import '../../styles/tools/loader.css'

class Opening extends React.Component{

    render() {
        return (
                <div className="loader fadeOut">
                    <img src={glitch} alt="crest" className="center"/>
                </div>
        );
    }
}

export default Opening;