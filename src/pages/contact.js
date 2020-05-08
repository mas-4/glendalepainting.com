import React from "react"
import {LayoutScroll, SEO} from "../components/global"
import styled from 'styled-components'
import {breakpoints} from '../styles/breakpoints'

const Container = styled.div`
    height: 90%;
    position: relative;
`
const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 45%;
    background-color: ${({theme}) => theme.lightGray};
    font-size: 4rem;
    border-radius: 1.6rem;
    border: 2px solid #d7d7d7;
    padding: 1.5rem 3rem;
    p {
        margin: 1rem;
    }
    ${breakpoints.vp13} {
        font-size: 3rem;
    }
    ${breakpoints.vp9} {
        width: 60%;
    }
    ${breakpoints.vp7} {
        width: 80%;
    }
    ${breakpoints.vp6} {
        width: 100%;
        background-color: ${({theme}) => theme.white};
        border: none;
    }
    ${breakpoints.vp4} {
        text-align: center;
        font-size: 3rem;
    }
    ${breakpoints.vp4_2} {
        font-size: 2.5rem;
    }
`
const Text = styled.div`
`
const Clear = styled.div`
    clear: both;
`
const Label = styled.div`
    float: left;
    font-weight: bold;
    ${breakpoints.vp4} {
        float: none;
    }
`
const Data = styled.div`
    float: right;
    ${breakpoints.vp4} {
        float: none;
        margin-bottom: 1rem;
    }

`
const ContactPage = () => (
    <LayoutScroll>
        <SEO title="Contact" />
        <Container>
            <Box>
                <Text>
                    <Label>Email:</Label>
                    <Data>
                        <a href='mailto:sales@glendalepainting.com'>sales@glendalepainting.com</a>
                    </Data>
                    <Clear />
                </Text>
                <Text>
                    <Label>Phone:</Label>
                    <Data>
                        <a href="tel:727-944-4444">(727) 944-4444</a>
                    </Data>
                    <Clear />
                </Text>
                <Text>
                    <Label>Fax:</Label>
                    <Data>(727) 942-4277</Data>
                </Text>
            </Box>
        </Container>
    </LayoutScroll>
)

export default ContactPage
