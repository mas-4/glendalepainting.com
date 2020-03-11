import React, { useState, useEffect } from 'react';
import { globalHistory } from '@reach/router';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../images/gpHeaderLogo.png';
import '../../styles/hamburger.css';

const Nav = styled.nav`
    position: fixed; /* keep it fixed */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 10; /* in front of parallax*/

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.white};
    height: 10rem;
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.size3};
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.33s;
    &:hover,
    &.active {
        color: ${({ theme }) => theme.red};
    }
`;

const NavContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 2;
    padding-left: 2rem;
`;

const SlideoutContainer = styled.div`
    position: absolute;
    padding-top: 10rem;
    top: 0px;
    width: 50%;
    left: 50%;
    height: 100vh;
    background: rgba(212, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SlideoutMenu = ({ menuOpen }) => {
    return (
        <>
            {menuOpen && (
                <SlideoutContainer>
                    <Links />
                </SlideoutContainer>
            )}{' '}
        </>
    );
};

const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <button
                className={`hamburger hamburger--slider ${menuOpen &&
                    'is-active'}`}
                type="button"
                onClick={() => setMenuOpen(prevState => !prevState)}
                style={{ outline: 'none', zIndex:'50' }}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </>
    );
};

const LinkWrapper = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);
    const abouts = ['/testimonials', '/team', '/about'];
    const path = globalHistory.location.pathname;
    const className = abouts.includes(path) ? 'active' : '';

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );

        return window.removeEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);

    return (
        <>
            {windowWidth > 768 ? (
                <LinkContainer>
                    <Links className={className} />
                </LinkContainer>
            ) : (
                <>
                    <HamburgerMenu
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                    />
                    <SlideoutMenu menuOpen={menuOpen} />
                </>
            )}
        </>
    );
};
const Links = ({ className }) => {
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

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Glendale Painting" />
        </Link>
    );
};

export const Header = () => {
    return (
        <Nav>
            <NavContainer>
                <Logo />
                <LinkWrapper />
            </NavContainer>
        </Nav>
    );
};
