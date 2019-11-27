import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Layout>
                <SEO title="Home" />
                <Parallax pages={2}  ref={ref => (this.parallax = ref)}>
                    <ParallaxLayer offset={0} speed={0.25}>
                        <Img fluid={this.props.data.file.childImageSharp.fluid} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0.25} style={{ height: '150vh', background: 'rgba(0, 0, 0, 0.4)' }} />
                    <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: 'darkred' }} />
                </Parallax>
            </Layout>
        )
    }
}

export default IndexPage

export const query = graphql`
    query {
        file(relativePath: { eq: "jobs/BelleHarbor.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
