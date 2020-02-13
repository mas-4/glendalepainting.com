import React from "react"
import {Layout, SEO} from "../components/global"
import styled from 'styled-components'
import Data from '../data/teamJSON.js'
import {AboutNav} from '../components/about/nav'

const Team = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5rem;
    width: 85%;
    margin: 0 auto;
`
const Item = styled.div`
    width: 45%;
    margin: 3rem;
    h1 {
        font-size: ${({theme}) => theme.size4}
    }
    h2 {
        font-size: ${({theme}) => theme.size3}
    }
    p {
        font-size: ${({theme}) => theme.size2}
    }

`
const Member = ({info}) => {
    return (
        <Item>
            <img src={info.image} />
            <h1>{info.name}</h1>
            <h2>{info.title}</h2>
            <p>{info.bio}</p>
        </Item>
    )
}

const TeamPage = () => (
    <Layout>
        <SEO title="Team" />
        <AboutNav />
        <Team>
            {Data.map(info => <Member info={info} />)}
        </Team>
    </Layout>
)

export default TeamPage
