import React from 'react'
import { LayoutScroll, SEO } from '../components/global'
import { AboutNav } from '../components/about/nav'
import styled from 'styled-components'

import { breakpoints } from '../styles/breakpoints'
import Data from '../data/testimonialsJSON'

const Thumb = styled.img`
    float: left;
    max-width: 125px;
    height: auto;
    margin-right: 1rem;
`

const HR = styled.hr`
    border-top: 1px dotted #8c8b8b;
	border-bottom: 1px dotted #fff;
    width: 75%;
`
const Testimonial = styled.div`
    margin: 5rem auto;
    margin-bottom: 8rem;
    width: 75%;
    font-size: ${({theme}) => theme.size2};
    ${breakpoints.vp9} {
        margin-bottom: 4rem;
    }
    ${breakpoints.vp6} {
        width: 90%;
    }
`
const Quote = styled.div`
    p {
        margin: 2rem;
        text-indent: 3rem;
        ${breakpoints.vp6} {
            margin: 0;
            margin-top: 1rem;
        }
        ${breakpoints.vp3} {
            text-indent: 1rem;
        }
    }
`
const Attribution = styled.div`
    color: ${({theme}) => theme.gray};
    text-align: right;
    margin-top: 2rem;
    margin-right: 4rem;
`

const TestimonialItem = ({ info }) => {
    return (
        <Testimonial>
            {info.thumb &&
                <a href={info.pdf} >
                    <Thumb src={info.thumb} />
                </a>
            }
            <Quote>
                {info.quote.map(paragraph => <p>{paragraph}</p>)}
            </Quote>
            <Attribution>
                {info.name && <p>{info.name}</p>}
                {info.title && <p>{info.title}</p>}
                {info.org && <p>{info.org}</p>}
            </Attribution>
        </Testimonial>
    )
}

const TestimonialsPage = () => {
    return (
        <LayoutScroll>
            <SEO title="Testimonials" />
            <AboutNav />
            {Data.map((info, i) => (
                <>
                    <TestimonialItem info={info} />
                    {i !== Data.length-1 && <HR/>}
                </>
            ))}
        </LayoutScroll>
    );
}

export default TestimonialsPage
