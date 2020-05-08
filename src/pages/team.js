import React from "react"
import { LayoutScroll, SEO } from "../components/global"
import styled from 'styled-components'
import Data from '../data/teamJSON.js'
import { AboutNav } from '../components/about/nav'
import { breakpoints } from '../styles/breakpoints'

const Team = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5rem;
    width: 75%;
    margin: 0 auto;
    ${breakpoints.vp13} {
        width: 85%;
    }
    ${breakpoints.vp9} {
        width: 90%;
    }
    ${breakpoints.vp4} {
        width: 100%;
        padding: 2rem;
    }
    ${breakpoints.vp4_2} {
        padding: 0;
    }
`
const Item = styled.div`
    width: 35%;
    margin: 3rem;
    ${breakpoints.vp13} {
        width: 40%;
    }
    ${breakpoints.vp9} {
        width: 95%;
    }
    ${breakpoints.vp4} {
        width: 100%;
    }
    ${breakpoints.vp3} {
        margin: 1rem;
    }
    img {
        float: left;
        margin: 1rem;
    }
    h1 {
        font-size: ${({theme}) => theme.size4};
    }
    h2 {
        font-size: ${({theme}) => theme.size3};
        color: ${({theme}) => theme.red};
    }
    p {
        font-size: ${({theme}) => theme.size2};
        color: ${({ theme }) => theme.gray};
    }


`
const Member = ({info}) => {
    return (
        <Item>
            <img src={info.image} alt={info.name} />
            <h1>{info.name}</h1>
            <h2>{info.title}</h2>
            <p>{info.bio}</p>
        </Item>
    )
}

const TeamPage = () => (
    <LayoutScroll>
        <SEO title="Team" />
        <AboutNav />
        <Team>
            {Data.map(info => <Member info={info} />)}
        </Team>
    </LayoutScroll>
)

export default TeamPage
