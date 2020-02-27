import React from 'react'

import {Layout, SEO} from '../components/global'

import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import {ProjectsPanel, ServicesBox} from '../components/landing'
import {TitleBox} from '../styled-components'


const HeroBlock = styled.div`
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.2);
    padding: 6.4rem;
    color: ${({theme}) => theme.white};
    width: 50%;
    text-align: center;
    h2 {
        text-align: left;
        font-size: ${({theme}) => theme.size5};
        margin: 30px 0;
    }
    a {
        transition: 0.33s;
        color: ${({theme}) => theme.red};
        font-weight: bold;
        text-decoration: none;
        &:hover {
            color: ${({theme}) => theme.lightGray};
        }
    }
`

const MissionText = styled.h1`
    padding-left: 3.2rem;
    font-size: ${({theme}) => theme.size8};
    line-height: 0.9;
    border-left 3.2rem solid ${({theme}) => theme.black};
    color: ${({theme}) => theme.red};
    width: 35%;
    margin: 0 0 0 45%;
`

const AboutBlock = styled.div`
    margin: 0 auto;
    width: 55%;
    background: rgba(255, 255, 255, 0.2);
    font-size: ${({theme}) => theme.size3};
    color: ${({theme}) => theme.white};
    padding: 4.8rem;
    font-family: Roboto;
    p{
        margin: 3.2rem 0;
        a {
            transition: 0.33s;
            color: ${({theme}) => theme.black};
            font-weight: bold;
            text-decoration: none;
            &:hover {
                color: ${({theme}) => theme.lightGray};
            }
        }
    }
`


class IndexPage extends React.Component {
    render() {
        const heroImage = this.props.data.hero.childImageSharp.fluid;
        const aboutImage = this.props.data.about.childImageSharp.fluid;
        const servicesImage = this.props.data.services.childImageSharp.fluid;

        return (
            <Layout>
                <SEO title="Home" />
                <Parallax
                    pages={7}
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
                            <TitleBox width='50rem' color='white' borderColor='red'>
                                Serving the Southeast Since 1985
                            </TitleBox>
                            <h2>
                                With over three decades in the industry,
                                whatever <Link to='/projects'>the size of your
                                project</Link>, Glendale has you covered.
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
                        <TitleBox width='32rem' color='white' borderColor='red' size='8rem'>What We Do</TitleBox>
                    </ParallaxLayer>
                    <ParallaxLayer offset={4.97} speed={0}>
                        <ServicesBox />
                    </ParallaxLayer>


                    <ParallaxLayer offset={5.62} speed={0}>
                        <Img fluid={aboutImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={5.95} speed={0.09}>
                        <TitleBox
                            width='40rem'
                            color='white'
                            size='11.2rem'
                            borderColor='black'
                            borderSize='3.2rem'>
                            Who We Are
                        </TitleBox>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6.25} speed={0.2}>
                        <AboutBlock>
                            <p>
                                Glendale is a family business in the Tampa Bay Area
                                servicing the State of Florida for over 3 decades. Run
                                by two brothers, Rick and Kevin, since 1985, over the
                                last 33 years the company has grown into a premier
                                quality painting and restoration contractor in Florida.
                            </p>
                            <p>
                                Our <Link to='/projects'>work history</Link> speaks to our capabilities. Our <Link
                                to='/testimonials'>testimonials</Link> speak to
                                our quality and customer service. The <Link
                                to='/about'>age of our company</Link> speaks
                                to our integrity, commitment and work ethic. The
                                importance we place on communication with our
                                clients speaks to our success.
                            </p>
                        </AboutBlock>
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
