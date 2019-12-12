import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroBlock = styled.div`
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.6);
    padding: 4rem;
    color: white;
    width: 50%;
    h1 {
        width: 60rem;
        line-height: 1;
        font-size: 5rem;
        border-left: 1rem solid red;
        padding: 0 0 0 1rem;
    }
    h2 {
        font-size: 2.25rem;
    }

`

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
                        <Img fluid={this.props.data.hero.childImageSharp.fluid} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.25} speed={0.4}>
                        <HeroBlock>
                            <h1>Serving the Southeast Since 1985</h1>
                            <h2>With over three decades in the industry, Glendale has you covered.</h2>
                        </HeroBlock>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.5} >
                        <Img fluid={this.props.data.mission.childImageSharp.fluid} />
                    </ParallaxLayer>

                </Parallax>
            </Layout>
        )
    }
}

export default IndexPage

// fragment for simpmle fluid imports
export const BGImg = graphql`
    fragment BGImg on File {
        childImageSharp {
            fluid(quality: 100, maxWidth: 1920, duotone: { highlight: "#000000", shadow: "#000000", opacity: 40 }, toFormat: PNG) {
                # the duotone is just a black screen for darkening bg images. To be adjusted when desired.
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export const query = graphql`
    query {
        hero: file(relativePath: { eq: "jobs/BelleHarbor.jpg" }) {
            ...BGImg
        }
        mission: file(relativePath: { eq: "office-stock.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920, duotone: { highlight: "#f00e2e", shadow: "#000000" }, toFormat: PNG) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
