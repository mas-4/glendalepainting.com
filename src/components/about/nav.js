import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavBar = styled.nav`
    width: fit-content;
    background-color: white;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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


export const AboutNav = () => {
    return (
        <NavBar>
            <NavLink to='/about' activeClassName="active">
                About
            </NavLink>
            <NavLink to='/team' activeClassName="active">
                Team
            </NavLink>
            <NavLink to='/testimonials' activeClassName="active">
                Testimonials
            </NavLink>
        </NavBar>
    )
}
