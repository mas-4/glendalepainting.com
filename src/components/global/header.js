import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../images/gpHeaderLogo.png';

const Nav = styled.nav`
    overflow: hidden; /* no scroll bar */
    position: fixed; /* keep it fixed */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 10; /* in front of parallax*/

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.white};
    height: 10rem;
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.size4};
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 1.6rem;
    transition: 0.33s;

    &:hover,
    &.active {
        background-color: ${({ theme }) => theme.red};
        color: ${({ theme }) => theme.white};
    }
`;

const Links = () => {
    return (
        <>
            <NavLink to="/about" activeClassName="active">
                About
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
                Projects
            </NavLink>
            <NavLink to="/services" activeClassName="active">
                Services
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
                Contact
            </NavLink>
        </>
    );
};

const Name = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
    return (
        <Link to="/" style={{ padding: '0 1.6rem' }}>
            <img src={logo} alt="Glendale Painting" />
        </Link>
    );
};

export const Header = () => {
    return (
        <Nav>
            <Name />
            <Links />
        </Nav>
    );
};


