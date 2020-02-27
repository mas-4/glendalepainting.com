import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavBar = styled.nav`
    width: fit-content;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
const NavLink = styled(Link)`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.size2};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 1.6rem;
    margin: 1rem;
    transition: 0.33s;
    background-color: ${({theme}) => theme.lightGray};

    &:hover,
    &.active {
        background-color: ${({ theme }) => theme.red};
        color: ${({ theme }) => theme.white};
    }
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
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
