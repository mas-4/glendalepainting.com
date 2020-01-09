import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import ProjectsPanel from '../components/landing/projects'

const HeroBlock = styled.div`
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.2);
    padding: 4rem;
    color: white;
    width: 50%;
    text-align: center;
    h1 {
        text-align: left;
        width: 80%;
        margin: 0 0 0 3rem;
        line-height: 1;
        font-size: 5rem;
        border-left: 1rem solid red;
        padding: 0 0 0 1rem;
    }
    h2 {
        text-align: left;
        font-size: 2.25rem;
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

const ServicesBox = () => {
    const Title = styled.h1`
        font-size: 500%;
        width: 10rem;
        margin: 0 auto 5rem auto;
        padding: 0 0 0 1rem;
        line-height: 0.9;
        border-left 1rem solid red;
        color: white;
    `
    const Boxes = styled.div`
        display: flex;
    `
    const Box = styled.div`
        width: 50%;
        background: ${props => props.color};
        display: flex;
        flex-direction: column;
        align-items: flex-${props => props.align};
        padding: 5%;
    `
    const Text = styled.div`
        width: 70%;
        color: white;
        h1 {
            line-height: 0.8;
        }
    `
    return (
        <>
            <Title>What We Do</Title>
            <Boxes>
                <Box
                    color="rgba(41, 41, 41, 0.78)"
                    align="end"
                >
                    <Text>
                        <h1>Repaint &amp; Restoration</h1>
                        <p>
                            Whether it's the typical repaint, or a full-out
                            restoration, our rehabilitation division has the
                            knowledge and experience to get the job done.  Our
                            employees know how to work with discerning clientele
                            and make every resident happy with the end-product.
                        </p>
                    </Text>
                </Box>
                <Box
                    color="rgba(241, 14, 14, 0.6)"
                    align="start"
                >
                    <Text>
                        <h1>New Construction Painting</h1>
                        <p>
                            Our new construction division boasts some of the
                            largest and most complex structures in Florida.  We
                            know how to meet the ever tightening deadlines
                            developers and general contractors require these
                            days.
                        </p>
                    </Text>
                </Box>
            </Boxes>
        </>
    )
}


class IndexPage extends React.Component {
    state = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight})
    }

    render() {
        const heroImage = this.props.data.hero.childImageSharp.fluid;
        const aboutImage = this.props.data.about.childImageSharp.fluid;
        const servicesImage = this.props.data.services.childImageSharp.fluid;

        return (
            <Layout>
                <SEO title="Home" />
                <Parallax
                    pages={10}
                    ref={ref => (this.parallax = ref)}
                    style={{ backgroundColor: "#FFFFFF" }}
                >

                    <ParallaxLayer offset={1} speed={0}>
                        {/* this has to go above the hero panel so that it's underlying it */}
                        <ProjectsPanel />
                    </ParallaxLayer>


                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                    >
                        <Img fluid={heroImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.25} speed={0.1}>
                        <HeroBlock>
                            <h1>Serving the Southeast Since 1985</h1>
                            <h2>
                                With over three decades in the industry, Glendale has you
                                covered.
                            </h2>
                        </HeroBlock>
                    </ParallaxLayer>


                    <ParallaxLayer offset={3.9} speed={0.2}>
                        <MissionText>
                            Take care of the customer and everything else will take care of itself.
                        </MissionText>
                    </ParallaxLayer>


                    <ParallaxLayer offset={4.5} speed={0}>
                        <Img fluid={servicesImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={4.97} speed={0}>
                        <ServicesBox />
                    </ParallaxLayer>


                    <ParallaxLayer offset={5.62} speed={0}>
                        <Img fluid={aboutImage} />
                    </ParallaxLayer>


                </Parallax>
            </Layout>
        )
    }
}

export default IndexPage

// fragment for simple fluid imports
export const BGImg = graphql`
  fragment BGImg on File {
      childImageSharp {
          fluid(
              quality: 100
              maxWidth: 1920
              duotone: { highlight: "#000000", shadow: "#000000", opacity: 50 }
              toFormat: PNG
          ) {
              # the duotone is just a black screen for darkening bg images. To be adjusted when desired.
                  ...GatsbyImageSharpFluid
          }
      }
  }
`
export const DuoToneImg = graphql`
  fragment DuoToneImg on File {
      childImageSharp {
          fluid(
              quality: 100
              maxWidth: 1920
              duotone: { highlight: "#f00e2e", shadow: "#000000" }
              toFormat: PNG
          ) {
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
      about: file(relativePath: { eq: "office-stock.jpg" }) {
          ...DuoToneImg
      }
      services: file(relativePath: { eq: "work/LaFirenzaDecksAdjusted.jpg" }) {
          ...BGImg
      }
  }
`
