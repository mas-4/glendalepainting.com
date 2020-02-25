import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { AboutNav } from '../components/about/nav'
import { Layout, SEO } from '../components/global'

const HeroTitle = styled.h1`
    color: ${({theme}) => theme.white};
    font-size: ${({theme}) => theme.size8};
    margin: 0 auto;
    width: 25%;
    border-left 1.6rem solid ${({theme}) => theme.red};
    padding-left: 1.6rem;
    line-height: 0.9;
`
const AboutBox = styled.div`
    background: rgba(0, 0, 0, 0.2);
    width: 70%;
    margin: 0 auto;
    height: 96rem;
`
const AboutParagraph = styled.div`
    margin-left: ${props => props.left ? '48' : '64'}rem;
    margin-top: 8rem;
    width: 45%;
    color: white;
    font-size: 2rem;
`
const Testimonial = styled.div`
    background: rgba(0, 0, 0, 0.3);
    width: 70%;
    padding: 1.6rem;
    color: ${({theme}) => theme.white};
    margin: 0 auto;
    font-size: 1.6rem ;
    p {
        margin: 1rem;
    }
    p:last-child {
        text-align: right;
        color: red;
        font-weight: bold;
    }
`
const SeeMore = styled.div`
    background-color: red;
    margin: 0 auto;
    width: fit-content;
    a {
        color: white;
        font-weight: bold;
        font-size: 3rem;
        padding: 1rem;
        text-decoration: none;
    }
`

class AboutPage extends React.Component {
    render() {
        const heroImage = this.props.data.hero.childImageSharp.fluid;
        const testimonialsImage = this.props.data.testimonials.childImageSharp.fluid;
        return (
            <Layout>
                <SEO title="About" />
                <Parallax
                    pages={2.25}
                    ref={ref => (this.parallax = ref)}
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    <ParallaxLayer offset={0} speed={0}>
                        <Img fluid={heroImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.105} speed={0}>
                        <AboutNav />
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0}>
                        <Img fluid={testimonialsImage} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.25} speed={0.25}>
                        <HeroTitle>Who We Are</HeroTitle>
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
                    <ParallaxLayer offset={1.25} speed={0.4}>
                        <HeroTitle>What People Say</HeroTitle>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.5} speed={0.5}>
                        <Testimonial>
                            <p>
                                As Glendale nears the final stage of completing
                                touch-ups and wrapping up remaining punch list items
                                here at Belle Harbor, I wanted to extend to you and
                                your entire staff a congratulatory 'Thank You', for
                                a big job that was well done, and which remained on
                                schedule. With 200 individual owners here, which
                                often can translate into 200 individual “bosses”,
                                the hands-on, customer responsiveness skills
                                practiced by you and your employees were quite
                                evident and always on display. In particular, having
                                Kevin as an on-site supervisor coupled with your
                                extremely capable crew foreman “Jared”, and with
                                each of them working hand in hand with one another,
                                their jointly coordinated efforts have contributed
                                to a well scheduled smooth and effectively
                                orchestrated project for us at Belle Harbor.
                            </p>
                            <p>
                                Don Mestas, Jr. - President - Belle Harbor Owner's Association
                            </p>
                        </Testimonial>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.75} speed={0.6}>
                        <Testimonial>
                            <p>
                                We can’t say enough to convey how pleased we
                                were with Kevin’s ability, as well as his
                                personality, in overseeing the crew supervisor
                                and entire project. We were equally pleased with
                                Jared, the crew supervisor who managed the crew
                                daily.
                            </p>

                            <p>
                                "Additionally, I’d like to convey our Board
                                received many compliments from our residents
                                regarding the selection of Glendale Painting.
                                They commented on how the crew supervisor and
                                painters were courteous and interacted
                                pleasantly with our residents. The overall
                                experience and expectations were not only met,
                                but exceeded.
                            </p>

                            <p>
                                Henri Tackett – President – Bermuda Board of Directors
                            </p>
                        </Testimonial>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.99} speed={0.7}>
                        <Testimonial>
                            <p>
                                Thanks for everything Rick.  The project has
                                turned out great and I appreciate your
                                professionalism.  Kevin was experienced,
                                efficient and motivated.  He provided constant
                                on-site supervision and immediate solutions.
                                Rick, you were always willing to accommodate
                                requests.
                            </p>
                            <p>
                                Gail Chase - Chief Operating Officer - Freedom Senior Management
                            </p>
                        </Testimonial>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.07}>
                        <SeeMore>
                            <Link to='/testimonials'>
                                See more testimonials
                            </Link>
                        </SeeMore>
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
    testimonials: file(relativePath: { eq: "jobs/OneSinger.jpg" }) {
        ...BGImg
    }
}
`
