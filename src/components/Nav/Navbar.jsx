import React from 'react';
import styled from 'styled-components'
import Burger from "./Burger";

import "../../styles/homepage.css"

const Nav = styled.nav`
    color: white;
    background-color: black;
    width: 100%;
    height: 55px;
    border-bottom: 2px solid red;
    padding: 0 10px 0 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 18;
    
    .logo {
        padding: 15px 15px;
    }
`;

const Navbar = () =>  {
    return (
        <div className="header">
            <Nav>
                <div className="logo">
                    #goloko
                </div>
                <Burger/>
            </Nav>
        </div>
    )
}

export default Navbar;