import React from 'react';
import { globalHistory } from '@reach/router'
import { Link } from 'gatsby';
import styled from 'styled-components';
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
    const abouts = ['/testimonials', '/team', '/about'];
    const path = globalHistory.location.pathname;
    const className = abouts.includes(path) ? 'active' : '';
    return (
        <>
            <NavLink to="/about" className={className}>
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


