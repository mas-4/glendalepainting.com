import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Fade from 'react-reveal/Fade';

import { breakpoints, numbers } from '../breakpoints'


const HeroBlock = styled.div`
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.6);
    padding: 4rem;
    color: white;
    width: 50%;
    @media ${breakpoints.vp12} {
        padding: 3rem;
    }
    @media ${breakpoints.vp12} {
        padding: 2rem;
    }
    h1 {
        width: 80%;
        margin: 0 0 0 3rem;
        line-height: 1;
        font-size: 5rem;
        border-left: 1rem solid red;
        padding: 0 0 0 1rem;
        @media ${breakpoints.vp12} { font-size: 4rem; }
        @media ${breakpoints.vp9} {
            font-size: 3.5rem;
            margin: 0 0 0 1rem;
            line-height: 0.9;
        }
        @media ${breakpoints.vp7} { font-size: 2rem; }
        @media ${breakpoints.vp4} { font-size: 1rem; }

    }
    h2 {
        font-size: 2.25rem;
        @media ${breakpoints.vp12} { font-size: 1.75rem; }
        @media ${breakpoints.vp9} { font-size: 1.25rem; }
        @media ${breakpoints.vp7} { font-size: 1rem; }
        @media ${breakpoints.vp4} { font-size: 0.5rem; }
    }

`
const MissionText = styled.h1`
    padding-left: 2rem;
    font-size: 500%;
    line-height: 0.9;
    border-left 2rem solid black;
    color: red;
    width: 35%;
    margin: 0 0 0 45%;
`


class IndexPage extends React.Component {
    render() {
        const { height, width } = { height: window.innerHeight, width: window.innerWidth };
        const heroImage = width < numbers.vp7 ?
            this.props.data.heroTall.childImageSharp.fluid :
            this.props.data.hero.childImageSharp.fluid;
        const missionImage = width < numbers.vp9 ?
            this.props.data.missionTall.childImageSharp.fluid :
            this.props.data.mission.childImageSharp.fluid;
        return(
            <Layout>
                <SEO title="Home" />
                <Parallax pages={3}  ref={ref => (this.parallax = ref)} style={{ backgroundColor: '#333333' }}>

                    <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#000000' }}>
                        <Img fluid={heroImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.25} speed={0.4}>
                        <HeroBlock>
                            <h1>Serving the Southeast Since 1985</h1>
                            <h2>With over three decades in the industry, Glendale has you covered.</h2>
                        </HeroBlock>
                    </ParallaxLayer>


                    <ParallaxLayer offset={1.75} speed={0.2} >
                        <Img fluid={missionImage} />
                    </ParallaxLayer>

                    <ParallaxLayer  offset={1} speed={0.1} style={{ backgroundColor: '#FFFFFF' }} />

                    <ParallaxLayer offset={1.25} speed={0.5}>
                        <MissionText>
                            Take care of the customer and everything else will take care of itself.
                        </MissionText>
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
export const DuoToneImg = graphql`
    fragment DuoToneImg on File {
        childImageSharp {
            fluid(quality: 100, maxWidth: 1920, duotone: { highlight: "#f00e2e", shadow: "#000000" }, toFormat: PNG) {
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
        heroTall: file(relativePath: { eq: "jobs/Seaglass3.jpg" }) {
            ...BGImg
        }
        mission: file(relativePath: { eq: "office-stock.jpg" }) {
            ...DuoToneImg
        }
        missionTall: file(relativePath: { eq: "buildings-stock.jpg" }) {
            ...DuoToneImg
        }
    }
`
