import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/gpHeaderLogo.png"

const Nav = styled.nav`
    overflow: hidden; /* no scroll bar */
    position: fixed; /* keep it fixed */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 1; /* in front of parallax*/

    display: flex;
    justify-content: center;

    background-color: white;
    padding: 1rem 0;
`

const Links = () => {
    const NavLink = styled(Link)`
        color: black;
        font-size: 2rem;
        text-decoration: none;
        text-transform: uppercase;

        padding: 0 1rem;
        line-height: 4rem;

        transition: 0.33s;
        &:hover, &.active {
            background-color: red;
            color: white;
        }
    `
    return (
        <>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </>
    )
}

const Name = () => {
    return (
        <Link to="/" style={{ padding: '0 1rem' }}><img src={logo} alt="logo" /></Link>
    )
}


const Header = () => {
    return (
        <Nav>
            <Name />
            <Links />
        </Nav>
    )
}

export default Header
