import React from 'react'
import { LayoutScroll, SEO } from '../components/global'
import { AboutNav } from '../components/about/nav'
import styled from 'styled-components'

import Data from '../data/testimonialsJSON'

const Thumb = styled.img`
    float: left;
    width: 20%;
    max-width: 125px;
    height: auto;
    margin-right: 1rem;
    margin-top 3rem;
`

const HR = styled.hr`
    border-top: 1px dotted #8c8b8b;
	border-bottom: 1px dotted #fff;
    width: 75%;
`
const Testimonial = styled.div`
    margin: 5rem auto;
    width: 75%;
    font-size: ${({theme}) => theme.size2};
    hr {
        width: 100%;
    }
`
const Quote = styled.div`
    p {
        margin: 2rem;
        text-indent: 3rem;
    }
`
const Attribution = styled.div`
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
