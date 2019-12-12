import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { slide as Menu } from "react-burger-menu"
import logo from "../images/logo.png"
import Dimensions from "../dimensions"
import { nums } from "../breakpoints"

const Container = styled.header`
    background-color: white;
    padding-top: 1rem;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
`
const Title = styled.h1`
    font-family: Roboto;
    text-transform: uppercase;
    margin: 0;
    a {
        text-decoration: none;
        color: black;
        transition: color 0.3s ease;
        &:hover { color: red; }
    }
`

const NavDesktop = () => {
    const Nav = styled.nav`
        a {
            margin-left: 0.5rem;

            text-decoration: none;
            text-transform: uppercase;
            color: black;
            font-family: Roboto;
            font-weight: 700;

            transition: color 0.3s ease;
            &:hover { color: red; }
        }
    `
    return (
        <Nav>
            <Link to="/about" activeClassName="active">About</Link>
            <Link to="/projects" activeClassName="active">Projects</Link>
            <Link to="/services" activeClassName="active">Services</Link>
            <Link to="/contact" activeClassName="active">Contact</Link>
        </Nav>
    )
}

class NavMobile extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <Menu>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/projects" activeClassName="active">Projects</Link>
                <Link to="/services" activeClassName="active">Services</Link>
                <Link to="/contact" activeClassName="active">Contact</Link>
            </Menu>
        );
    }
}


const Header = () => {
    const data = useStaticQuery(
        graphql`query { site { siteMetadata { title } } }`
    )
    const { height, width } = Dimensions();

    const Nav = width < nums.vp4 ? NavMobile : NavDesktop

    return (
        <Container>
            <Title>
                <Link to="/" >
                    <img src={logo} alt="Logo" height="25" />
                </Link>
                <Link to="/">{data.site.siteMetadata.title}</Link>
            </Title>
            <Nav />
        </Container>
    )
}

export default Header
