import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import ProjectsPanel from '../components/landing/projects'
import ServicesBox from '../components/landing/services'

const Title = styled.h1`
    font-size: 5rem;
    width: ${props => props.width};
    margin: 0 auto;
    padding: 0 0 0 1rem;
    line-height: 0.9;
    border-left 1rem solid red;
    color: white;
    text-align: left;
`

const HeroBlock = styled.div`
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.2);
    padding: 4rem;
    color: white;
    width: 50%;
    text-align: center;
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


                    <ParallaxLayer offset={0} speed={0.5}>
                        <Img fluid={heroImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.25} speed={0.2}>
                        <HeroBlock>
                            <Title width='30rem'>Serving the Southeast since 1985</Title>
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
                    <ParallaxLayer offset={4.8} speed={0.2}>
                        <Title width='20rem'>What We Do</Title>
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
