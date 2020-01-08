/* Unfortunately, because Richard Sendker, consumate lover of demoded web design
 * style wants the most objectively gaudy parallax scroller of all time, using
 * pictures instead of sprites, we have to play a lot with the offsets in
 * react-spring for mobile optimization to keep the background out. Hence, this
 * single page is an obnoxious piece of crap. Each panel is separated by a block
 * comment with double slashes. I wish I could split them out into components,
 * but because React doesn't like having two root level JSX thingies, we can't
 * exactly do that. (I'm not sure if I could.)
 *
 * <><ParallaxLayer /><ParallaxLayer /></>
 *
 * But I'm pretty sure I tried that and it didn't work. So this is the file we
 * have.
 *
 * Get over it.
 */

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

import { breakpoints, numbers } from "../breakpoints"

// HERO BLOCK
// This is the primary image hero block for the site. It is an asshole. It
// changes from Belle Harbor to Seaglass to get a taller image. Also, because
// Fuck BCBE.
const HeroBlock = styled.div`
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.2);
    padding: 4rem;
    color: white;
    width: 50%;
    text-align: center;
    @media ${breakpoints.vp12} {
        padding: 3rem;
    }
    @media ${breakpoints.vp9} {
        padding: 2rem;
    }
    @media ${breakpoints.vp7} {
        padding: 4rem 2rem;
        width: 90%;
    }
    h1 {
        text-align: left;
        width: 80%;
        margin: 0 0 0 3rem;
        line-height: 1;
        font-size: 5rem;
        border-left: 1rem solid red;
        padding: 0 0 0 1rem;
        @media ${breakpoints.vp12} {
            font-size: 4rem;
        }
        @media ${breakpoints.vp9} {
            font-size: 3.5rem;
            margin: 0 0 0 1rem;
            line-height: 0.9;
        }
        @media ${breakpoints.vp7} {
            font-size: 4rem;
            margin: 0 0 0 3rem;
        }
        @media ${breakpoints.vp4} {
            margin: 0 0 0 1rem;
        }
        @media ${breakpoints.vp4_2} {
            font-size: 3.5rem;
        }
        @media ${breakpoints.vp3} {
            font-size: 3rem;
        }
    }
    h2 {
        text-align: left;
        font-size: 2.25rem;
        @media ${breakpoints.vp12} {
            font-size: 1.75rem;
        }
        @media ${breakpoints.vp9} {
            font-size: 1.25rem;
        }
        @media ${breakpoints.vp7} {
            font-size: 2.25rem;
        }
        @media ${breakpoints.vp3} {
            font-size: 2rem;
        }
    }
`

// MISSION TEXT
// This is a panel with a white background and black text that says "Take care
// of the customer and everything else will take care of itself."
const MissionText = styled.h1`
    padding-left: 2rem;
    font-size: 500%;
    line-height: 0.9;
    border-left 2rem solid black;
    color: red;
    width: 35%;
    margin: 0 0 0 45%;
    @media ${breakpoints.vp12} {
        font-size: 400%;
    }
    @media ${breakpoints.vp9} {
        font-size: 350%;
        margin: 0 0 0 35%;
    }
    @media ${breakpoints.vp7} {
        font-size: 275%;
        border-left: 1.5rem solid black;
        padding-left: 1.5rem;
    }
    @media ${breakpoints.vp6} {
        font-size: 250%;
        margin: 0 0 0 25%;
        border-left: 1rem solid black;
        padding-left: 1rem;
    }
    @media ${breakpoints.vp6} {
        width: 50%;
    }

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
        // Shift heroImage on the vp7 breakpoint
        const heroImage =
            this.state.width <= numbers.vp9
            ? this.props.data.heroTall.childImageSharp.fluid
            : this.props.data.hero.childImageSharp.fluid;

        // Shift the aboutImage on the vp9 breakpoint
        const aboutImage =
            this.state.width <= numbers.vp9
            ? this.props.data.aboutTall.childImageSharp.fluid
            : this.props.data.about.childImageSharp.fluid;

        return (
            <Layout>
                <SEO title="Home" />
                <Parallax
                    pages={3}
                    ref={ref => (this.parallax = ref)}
                    style={{ backgroundColor: "#FFFFFF" }}
                >
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

                    <ParallaxLayer offset={2} speed={0.4}>
                        <Img
                            fluid={aboutImage}
                        />
                    </ParallaxLayer>


                    <ParallaxLayer offset={1.5} speed={0.3}>
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
      heroTall: file(relativePath: { eq: "jobs/Seaglass3.jpg" }) {
          ...BGImg
      }
      about: file(relativePath: { eq: "office-stock.jpg" }) {
          ...DuoToneImg
      }
      aboutTall: file(relativePath: { eq: "buildings-stock.jpg" }) {
          ...DuoToneImg
      }
      brush: file(relativePath: { eq: "brushClip.png" }) {
          childImageSharp {
              fluid(
                  duotone: { highlight: "#f00e2e", shadow: "#000000" }
              )
              {
                  ...GatsbyImageSharpFluid
              }
          }
      }
      brushStroke: file(relativePath: { eq: "brushstroke.png" }) {
          childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
          }
      }
      brushCircle: file(relativePath: { eq: "brushCircle.png" }) {
          childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
          }
      }
  }
`
