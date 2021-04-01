import React from 'react';
import theme from '../../img/4loko/main.gif'

const Home = () =>{
    return (
        <div>
            <div className="home">
                <div className="textbox">
                    <p className="alignleft">ESTB</p>
                    <p className="alignright">1869</p>
                </div>

                <img src={theme} />
                <p>
                    Number one, second to none.
                </p>
            </div>
        </div>
    )
}

export default Home;