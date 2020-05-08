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
    color: ${({ theme, menuOpen }) => menuOpen ? theme.white : theme.black};
    font-size: ${({ theme, menuOpen }) => menuOpen ? theme.size7 : theme.size3};
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
    padding: 10rem 0 30rem;
    top: 0px;
    width: 100%;
    left: 0px;
    height: 100vh;
    background: rgb(45, 45 , 45);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
const SlideoutMenu = ({ menuOpen }) => {
    return (
        <>
            {menuOpen && (
                <SlideoutContainer>
                    <Links menuOpen={menuOpen}/>
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
                style={{ outline: 'none', zIndex:'50'}}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </>
    );
};

const LinkWrapper = () => {
    const [windowWidth, setWindowWidth] = useState(1920);
    const [menuOpen, setMenuOpen] = useState(false);
    const abouts = ['/testimonials', '/team', '/about'];
    const path = globalHistory.location.pathname;
    const className = abouts.includes(path) ? 'active' : '';

    useEffect(() => {
        setWindowWidth(window.innerWidth);
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
const Links = ({ className, menuOpen }) => {
    return (
        <>
            <NavLink to="/about" className={className} menuOpen={menuOpen}>
                About
            </NavLink>
            <NavLink to="/projects" activeClassName="active" menuOpen={menuOpen}>
                Projects
            </NavLink>
            <NavLink to="/services" activeClassName="active" menuOpen={menuOpen}>
                Services
            </NavLink>
            <NavLink to="/contact" activeClassName="active" menuOpen={menuOpen}>
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
