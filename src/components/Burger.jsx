import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class Burger extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>
                <a id="home" className={"menu-item"} >Home</a>
                <a id="home" className={"menu-item"} >About</a>
                <a id="home" className={"menu-item"} >Contact</a>
            </Menu>
        );
    }
}

export default Burger;