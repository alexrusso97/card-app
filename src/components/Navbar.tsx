import React from "react";
import Home from "./Home";
import Preferiti from "./Preferiti";
import styled from "styled-components";
interface Pagine{
    cambioPagina: (p: string)=>void
}

const NavbarContainer = styled.nav(()=>({
    width: '100%',
    height: '80px',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}))

const NavbarLink = styled.h3(()=>({
    color: 'white',
    fontSize: 'x-large',
    textDecoration: 'none',
    margin: '10px',
    cursor: 'pointer'
}))

function Navbar({cambioPagina}:Pagine): JSX.Element {

    return (
        <NavbarContainer>
            
                <NavbarLink onClick={()=>cambioPagina("Home")}>Home</NavbarLink>
            
            
                <NavbarLink onClick={()=>cambioPagina("Preferiti")}>Preferiti</NavbarLink>
            
        </NavbarContainer>
    )
}
export default Navbar;