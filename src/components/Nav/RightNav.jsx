import React from 'react';
import { NavLink } from "react-router-dom";

import styled from 'styled-components';
import { bool } from "prop-types";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;
  li {
    padding: 18px 10px;
  }
  
  a {
    text-decoration: none;
    color: white; 
  } 
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: antiquewhite;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
    a {
      color: black;
    }
  }
`;

const RightNav = ({ open, onOpen }) => {


    return (
        <div>
            <Ul open={open}>
                <li><NavLink to="/" onClick={ () => onOpen(open) }>Home</NavLink></li>
                <li><NavLink to="/about" onClick={ () => onOpen(open)}>About</NavLink></li>
                <li><NavLink to="/rush" onClick={ () => onOpen(open) }>Rush</NavLink></li>
                <li><NavLink to="/leadership" onClick={ () => onOpen(open) }>Leadership</NavLink></li>
                <li><NavLink to="/contact" onClick={ () => onOpen(open) }>Contact</NavLink></li>
            </Ul>
        </div>
    )
}

RightNav.propTypes = {
    open: bool.isRequired,
}

export default RightNav;