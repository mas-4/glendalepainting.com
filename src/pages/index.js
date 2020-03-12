import React from 'react'
import { graphql, Link } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import { LayoutScroll, Layout, SEO } from '../components/global'
import { ProjectsPanel, ServicesBox } from '../components/landing'
import { TitleBoxBland, TitleBox } from '../styled-components'
import { breakpoints, numbers} from '../styles/breakpoints'


const HeroBlock = styled.div`
    background: rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    padding: 6.4rem;
    padding-bottom: 1rem;
    color: ${({theme}) => theme.white};
    width: 80%;
    text-align: center;
    h1 {
        ${breakpoints.vp9} {
            font-size: 6rem;
            width: 95%;
        }
        ${breakpoints.vp7} {
            font-size: 5rem;
        }
    }
    h2 {
        text-align: left;
        font-size: ${({theme}) => theme.size5};
        margin: 30px 0;
        ${breakpoints.vp9} {
            font-size: ${({theme}) => theme.size4};
        }
        ${breakpoints.vp7} {
            font-size: ${({theme}) => theme.size3};
        }
    }
`
const Spacer = styled.div`
    height: 7rem;
`
const ServicesTitle = styled(TitleBoxBland)`
    margin-bottom: 5rem;
`
const MissionText = styled.h1`
    padding-left: 3.2rem;
    font-size: ${({theme}) => theme.size8};
    line-height: 0.9;
    border-left 3.2rem solid ${({theme}) => theme.black};
    color: ${({theme}) => theme.red};
    width: 35%;
    margin-left: 45%;
    ${breakpoints.vp13} {
        width: 45%;
        margin-left: 35%;
        font-size: 6.4rem;
        border-left-width: 2.5rem;
    }
    ${breakpoints.vp12} {
        width: 65%;
        margin-left: 25%;
    }
    ${breakpoints.vp9} {
        font-size: ${({theme}) => theme.size7};
        border-left-width: 2.5rem;
        margin-top: 10rem;
    }
    ${breakpoints.vp7} {
        font-size: 4.5rem;
        border-left-width: 2rem;
        margin-left: 15%;
        padding-left: 2.5rem;
    }
    ${breakpoints.vp6} {
        font-size: 5rem;
        width: 90%;
        margin-left: 5%;
    }
`
const MissionPanel = styled.div`
    height: 60rem;
    padding: 10rem;
    ${breakpoints.vp7} {
        height: 50rem;
        padding: 5rem;
    }
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
    ${breakpoints.vp12} {
        padding: 1rem 3rem;
        p {
            margin: 2rem 0;
            font-size: ${({theme}) => theme.size3};
        }
    }
    ${breakpoints.vp9} {
        margin-top: 4rem;
        p {
            font-size: ${({theme}) => theme.size2};
        }
    }
    ${breakpoints.vp7} {
        width: 75%;
    }
    ${breakpoints.vp6} {
        width: 95%;
        p{
            font-size: ${({theme}) => theme.size3};
        }
    }
`
const AboutTitle = styled(TitleBoxBland)`
    width: 40rem;
    font-size: 10.5rem;
    border-left-width: 2.5rem;
    ${breakpoints.vp13} {
        font-size: 9rem;
        width: 30rem;
        border-left-width: 2rem;
    }
    ${breakpoints.vp12} {
        font-size: 8rem;
        width: 55rem;
    }
    ${breakpoints.vp9} {
        width: 40rem;
    }
`

const BigIndex = ({ width, height, heroImage, aboutImage, servicesImage }) => {
    let projectsOffset = 0.99;
    let missionOffset = 3.85;
    let servicesImageOffset = 4.5;
    let servicesTitleOffset = 4.8;
    let servicesBoxOffset = 4.97;
    let aboutImageOffset = 5.4;
    let aboutTitleOffset = 5.53;
    let aboutBodyOffset = 5.9;
    let pageSize = 6.4;

    if (width < numbers.vp13) {
        projectsOffset = 0.8;
        missionOffset = 3.3;
        servicesImageOffset = 3.78;
        servicesTitleOffset = 3.99;
        servicesBoxOffset = 4.1;
        aboutImageOffset = 4.64;
        aboutTitleOffset = 4.75;
        aboutBodyOffset = 5;
        pageSize = 5.8;
    } if (width < numbers.vp12 && height < 1030) {
        missionOffset = 2.9;
        servicesImageOffset = 3.3;
        servicesTitleOffset = 3.4;
        servicesBoxOffset = 3.6;
        aboutImageOffset = 3.96;
        aboutTitleOffset = 4;
        aboutBodyOffset = 4.1;
        pageSize = 4.7;
    } if (width < numbers.vp12 && height < 770) {
        missionOffset = 3.35;
        servicesImageOffset = 3.8;
        servicesTitleOffset = 3.9999;
        servicesBoxOffset = 4.2;
        aboutImageOffset = 4.7;
        aboutTitleOffset = 4.8;
        aboutBodyOffset = 4.999;
        pageSize = 5.5;

    }

    return (
        <Layout>
            <SEO title="Home" />
            <Parallax
                pages={pageSize}
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <ParallaxLayer offset={projectsOffset} speed={0}>
                    {/* this has to go above the hero panel so that it's underlying it */}
                    <ProjectsPanel  width={width} />
                </ParallaxLayer>


                <ParallaxLayer offset={0} speed={0.5}>
                    <Img fluid={heroImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.25} speed={0.2}>
                    <HeroBlock>
                        <TitleBox
                            width='50rem'
                            color='white'
                            borderColor='red'
                        >
                            Serving the Southeast Since 1985
                        </TitleBox>
                        <h2>
                            With over three decades in the industry, Glendale has
                            you covered.
                        </h2>
                    </HeroBlock>
                </ParallaxLayer>


                <ParallaxLayer offset={missionOffset} speed={0.2}>
                    <MissionText>
                        Take care of the customer and everything else will take care
                        of itself.
                    </MissionText>
                </ParallaxLayer>


                <ParallaxLayer offset={servicesImageOffset} speed={0}>
                    <Img fluid={servicesImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={servicesTitleOffset} speed={0.2}>
                    <TitleBox
                        width='32rem'
                        color='white'
                        borderColor='red'
                        size='8rem'
                    >
                        What We Do
                    </TitleBox>
                </ParallaxLayer>
                <ParallaxLayer offset={servicesBoxOffset} speed={0}>
                    <ServicesBox />
                </ParallaxLayer>
                <ParallaxLayer offset={aboutImageOffset} speed={0}>
                    <Img fluid={aboutImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={aboutTitleOffset} speed={0.09}>
                    <AboutTitle
                        color='white'
                        borderColor='black'
                    >
                        Who We Are
                    </AboutTitle>
                </ParallaxLayer>
                <ParallaxLayer offset={aboutBodyOffset} speed={0.2}>
                    <AboutBlock>
                        <p>
                            Glendale is a family business in the Tampa Bay Area
                            servicing the State of Florida for over 3 decades. Run
                            by two brothers, Rick and Kevin, since 1985, over the
                            last 33 years the company has grown into a premier
                            quality painting and restoration contractor in Florida.
                        </p>
                        <p>
                            Our <Link to='/projects'>work history</Link> speaks to our capabilities. Our <Link to='/testimonials'>testimonials</Link> speak to our quality and customer service. The <Link to='/about'>age of our company</Link> speaks to our integrity, commitment and work ethic.  The importance we place on communication with our clients speaks to our success.
                        </p>
                    </AboutBlock>
                </ParallaxLayer>
            </Parallax>
        </Layout>
    )
}

const Background = ({ image, className, children }) => {
    return (
        <BackgroundImage
            Tag="section"
            backgroundColor={`#040e18`}
            fluid={image}
            className={className}
        >
            {children}
        </BackgroundImage>
    )
}
const StyledBackground = styled(Background)`
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const SmallIndex = ({ heroImage, servicesImage, aboutImage, width }) => {
    return (
        <LayoutScroll>
            <SEO title="Home" />
            <StyledBackground image={heroImage}>
                <Spacer />
                <HeroBlock>
                    <TitleBox
                        width='50rem'
                        color='white'
                        borderColor='red'
                    >
                        Serving the Southeast Since 1985
                    </TitleBox>
                    <h2>
                        With over three decades in the industry, Glendale has
                        you covered.
                    </h2>
                </HeroBlock>
                <Spacer />
            </StyledBackground>
            <ProjectsPanel width={width} />
            <MissionPanel>
                <Fade top>
                    <MissionText>
                        Take care of the customer and everything else will take care
                        of itself.
                    </MissionText>
                </Fade>
            </MissionPanel>
            <StyledBackground
                image={servicesImage}
            >
                <div style={{ height: '10rem' }} />
                <Fade top>
                    <ServicesTitle
                        color='white'
                        borderColor='red'
                    >
                        What We Do
                    </ServicesTitle>
                </Fade>
                <ServicesBox />
                <Spacer />
            </StyledBackground>
            <StyledBackground
                image={aboutImage}
            >
                <Spacer />
                <AboutTitle
                    color='white'
                    borderColor='black'
                >
                    Who We Are
                </AboutTitle>
                <AboutBlock>
                    <p>
                        Glendale is a family business in the Tampa Bay Area
                        servicing the State of Florida for over 3 decades. Run
                        by two brothers, Rick and Kevin, since 1985, over the
                        last 33 years the company has grown into a premier
                        quality painting and restoration contractor in Florida.
                    </p>
                    <p>
                        Our <Link to='/projects'>work history</Link> speaks to our capabilities. Our <Link to='/testimonials'>testimonials</Link> speak to our quality and customer service. The <Link to='/about'>age of our company</Link> speaks to our integrity, commitment and work ethic.  The importance we place on communication with our clients speaks to our success.
                    </p>
                </AboutBlock>
                <Spacer />
            </StyledBackground>
        </LayoutScroll>
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
        const Index = this.state.width > numbers.vp9 ? BigIndex : SmallIndex;
        return (
            <Index
                width={this.state.width}
                height={this.state.height}
                heroImage={this.props.data.hero.childImageSharp.fluid}
                aboutImage={this.props.data.about.childImageSharp.fluid}
                servicesImage={this.props.data.services.childImageSharp.fluid}
            />
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
