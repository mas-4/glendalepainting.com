import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import Layout from '../components/layout'
import SEO from '../components/seo'


const HeroTitle = styled.h1`
    color: white;
    font-size: 5rem;
    margin: 0 auto;
    width: 25%;
    border-left 1rem solid red;
    padding-left: 1rem;
`
const AboutBox = styled.div`
    background: rgba(0, 0, 0, 0.2);
    width: 70%;
    margin: 0 auto;
    height: 60rem;
`
const AboutParagraph = styled.div`
    margin-left: ${props => props.left ? '30' : '40'}rem;
    margin-top: 5rem;
    width: 45%;
    color: white;
    font-size: 1.2rem;
`

class AboutPage extends React.Component {
    render() {
        const heroImage = this.props.data.hero.childImageSharp.fluid;
        return (
            <Layout>
                <SEO title="About" />
                <Parallax
                    pages={7}
                    ref={ref => (this.parallax = ref)}
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    <ParallaxLayer offset={0} speed={0}>
                        <Img fluid={heroImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.3} speed={0.25}>
                        <HeroTitle>About Us</HeroTitle>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.50} speed={0.45}>
                        <AboutBox />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.50} speed={0.45}>
                        <AboutParagraph left={true}>
                            Founded in 1985, Glendale is one of the most successful
                            commercial painting contractors in the Southeast. Quality and
                            reliability has led to our Success.  Our company name may not be
                            widely recognized, but we're well-known in the industry.  We
                            don't put street signs out on every project, we don't advertise
                            in the trade or community publications, and we don't attend all
                            the trade functions displaying our signs and marketing
                            giveaways.  We expand by word-of-mouth alone.  We expand by
                            doing good work for a competitive price, by doing it right the
                            first time so there's no need for call-backs or warranty claims,
                            by servicing our clients above and beyond their expectations.
                        </AboutParagraph>
                        <AboutParagraph left={false}>
                            The Glendale Painting Team has successfully completed projects
                            as small as $5,000 and as large as $3,500,000.  Our project
                            portfolio is extensive and contains a balanced blend of New
                            Construction Projects with Repaint/Restoration Projects.  The
                            company is fully bonded and insured and can provide payment and
                            performance bonds on request.
                        </AboutParagraph>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.99} speed={0.5}>
                        <AboutParagraph left={true}>
                            Unlike most of the competition, our company directly employs all
                            its workers.  When you hire Glendale, you get Glendale. Unlike
                            most of the competition, Glendale is not a broker subletting the
                            work. All of our work is performed in-house.  We understand the
                            importance of quality workmanship to the customer, our
                            reputation, and our future.  This "old school approach" provides
                            more control on the project and insures specifications are
                            followed with quality as the main goal.
                        </AboutParagraph>
                        <AboutParagraph left={false}>
                            One of the highest compliments a company like ours can receive
                            is when a long time employee decides it's time to spread their
                            wings and start their own company. We take pride in knowing
                            these new entrepreneurs have learned it the right way.
                        </AboutParagraph>
                    </ParallaxLayer>

                </Parallax>
            </Layout>
        )
    }
}

export default AboutPage

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
export const query = graphql`
query {
    hero: file(relativePath: { eq: "work/ScaffoldBanner.jpg" }) {
        ...BGImg
    }
}
`
