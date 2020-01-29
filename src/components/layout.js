import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const Main = styled.main`
    display: grid;
    grid-template-rows: 6rem auto;
`
const Footer = styled.footer`
    height: 5rem;
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Main>
                <div />
                {children}
            </Main>
            <Footer>
                © {new Date().getFullYear()} Glendale Painting Corporation,{` `}
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
        </>
    )
}

export default Layout
