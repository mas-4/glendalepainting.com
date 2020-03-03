import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Layout, SEO } from '../components/global'
import { ProjectsPanel, ServicesBox } from '../components/landing'
import { TitleBox } from '../styled-components'
import { breakpoints, numbers} from '../styles/breakpoints'


const HeroBlock = styled.div`
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.2);
    padding: 6.4rem;
    padding-bottom: 1rem;
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
    margin-left: 45%;
    ${breakpoints.vp13} {
        width: 45%;
        margin-left: 35%;
        font-size: 6.4rem;
        border-left-width: 2.5rem;
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
`

const BigIndex = ({ width, height }) => {
    const data = useStaticQuery(graphql`
        # fragment for simple fluid imports
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
        fragment DuoToneImg on File {
            childImageSharp {
                fluid(
                    quality: 100
                    maxWidth: 1920
                    duotone: { highlight: "#ff0000", shadow: "#000000" }
                    toFormat: PNG
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
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
    `);

    const heroImage = data.hero.childImageSharp.fluid;
    const aboutImage = data.about.childImageSharp.fluid;
    const servicesImage = data.services.childImageSharp.fluid;


    let projectsOffset = 0.99;
    let missionOffset = 3.85;
    let servicesImageOffset = 4.5;
    let servicesTitleOffset = 4.8;
    let servicesBoxOffset = 4.97;
    let aboutImageOffset = 5.62;
    let aboutTitleOffset = 5.8;
    let aboutBodyOffset = 6.1;

    if (width < numbers.vp13) {
        projectsOffset = 0.8;
        missionOffset = 3.2;
        servicesImageOffset = 3.78;
        servicesTitleOffset = 3.99;
        servicesBoxOffset = 4.1;
        aboutImageOffset = 4.64;
        aboutTitleOffset = 4.8;
    }
    return (
        <Parallax
            pages={7}
            style={{ backgroundColor: "#FFFFFF" }}
        >
            <ParallaxLayer offset={projectsOffset} speed={0}>
                {/* this has to go above the hero panel so that it's underlying it */}
                <ProjectsPanel />
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
                <TitleBox
                    width='40rem'
                    color='white'
                    size='11.2rem'
                    borderColor='black'
                    borderSize='3.2rem'
                >
                    Who We Are
                </TitleBox>
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

        return (
            <Layout>
                <SEO title="Home" />
                <BigIndex width={this.state.width} height={this.state.height} />
            </Layout>
        )
    }
}

export default IndexPage
