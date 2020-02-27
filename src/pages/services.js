import React from 'react'
import {LayoutScroll, SEO} from '../components/global'
import styled from 'styled-components'

import Data from '../data/servicesJSON'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Item = styled.div`
    width: 38rem;
    background-color: ${({theme}) => theme.lightGray};
    margin: 0.8rem;
    padding: 0 3rem;
    border-radius: 1.6rem;
    border: 2px solid #d7d7d7;

    img {
        width: 100%;
        margin: 2rem auto 0 auto;
        border-radius: 0.64rem;
        border: 1px solid #d7d7d7;
    }
    h1 {
        font-size: ${({theme}) => theme.size3};
        color: ${({theme}) => theme.red};
        margin: 11.8px 0;
    }

    h2 {
        font-size: ${({theme}) => theme.size2};
        margin-top: 13.2px;
    }

    p {
        font-size: ${({theme}) => theme.size2};
        margin: 2rem 0;
    }
`

const Panel = ({info}) => {
    return (
        <Item>
            <img src={info.pic}  alt={info.h1} />
            <h1>{info.h1}</h1>
            <h2>{info.h2}</h2>
            {info.body.map(para => <p>{para}</p>)}
        </Item>
    )
}

const ServicesPage = () => (
    <LayoutScroll>
        <SEO title="Services" />
        <Container>
            {Data.map(info => <Panel info={info} />)}
        </Container>
    </LayoutScroll>
)

export default ServicesPage
