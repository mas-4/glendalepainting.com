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
        const styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                left: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmBurgerBarsHover: {
                background: '#a90000'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenuWrap: {
                position: 'fixed',
                height: '100%'
            },
            bmMenu: {
                background: '#373a47',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em'
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em'
            },
            bmItem: {
                display: 'inline-block'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        }
        return (
            <Menu styles={ styles } right>
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

    //    const Nav = width < nums.vp4 ? NavMobile : NavDesktop
    const Nav = NavDesktop

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
