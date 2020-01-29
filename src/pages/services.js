import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

import Data from '../servicesJSON'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Item = styled.div`
    width: 20%;
    background-color: #e6e6e6;
    margin: 0.5rem;
    padding: 0 2%;
    border-radius: 1rem;
    border: 2px solid #d7d7d7;
    img {
        border-radius: 0.4rem;
        border: 1px solid #d7d7d7;
    }
    h1 {
        font-size: 1.1rem;
        color: red;
    }
    h2 {
        font-size: 1rem;
    }
    p {
    }
`

const Panel =({info}) => {
    return (
        <Item>
            <img src={info.pic} style={{ width: '300px', margin: '2rem auto 0 auto' }} />
            <h1>{info.h1}</h1>
            <h2>{info.h2}</h2>
            {info.body.map(para => <p>{para}</p>)}
        </Item>
    )
}

const ServicesPage = () => (
    <Layout>
        <SEO title="Services" />
        <Container>
            {Data.map(info => <Panel info={info} />)}
        </Container>
    </Layout>
)

export default ServicesPage
