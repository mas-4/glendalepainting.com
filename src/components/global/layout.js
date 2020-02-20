import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import * as reset from '../../styles/reset.css';
import * as global from '../../styles/global.css';
import { Header } from './header';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
`;

const MainScroll = styled.main`
    display: grid;
    grid-template-rows: 9.6rem auto;
    overflow: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const MainNoScroll = styled.main`
    display: grid;
    grid-template-rows: 9.6rem auto;
`;

const Footer = styled.footer`
    height: 8rem;
    background-color: ${({theme}) => theme.lightGray};
    margin-top: 4rem;
    padding: 4rem;
    text-align: center;
    font-size: ${({theme}) => theme.size2};
`;

export const LayoutScroll = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header siteTitle='Glendale Painting' />
            <MainScroll>
                <div />
                {children}
                <Footer>
                    © {new Date().getFullYear()} Glendale Painting Corporation,{` `}
                    Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Footer>
            </MainScroll>
        </>
    );
};

export const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header siteTitle='Glendale Painting' />
            <MainNoScroll>
                <div />
                {children}
                <Footer>
                    © {new Date().getFullYear()} Glendale Painting Corporation,{` `}
                    Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Footer>
            </MainNoScroll>
        </>
    );
};
