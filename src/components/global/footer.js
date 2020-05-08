import React from 'react';
import styled from 'styled-components';

import twitter from '../../images/twitter.svg'
import twitterred from '../../images/twitterred.svg'

import linkedin from '../../images/linkedin.svg'
import linkedinred from '../../images/linkedinred.svg'

import facebook from '../../images/facebook.svg'
import facebookred from '../../images/facebookred.svg'

import {breakpoints} from '../../styles/breakpoints'

const FooterDiv = styled.footer`
    position:fixed;
    left:0px;
    bottom:0px;
    width:100%;
    z-index: 1;
    background-color: ${({ theme }) => theme.lightGray};
    text-align: center;
    font-size: ${({ theme }) => theme.size2};
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 5px;
    ${breakpoints.vp4_2} {
        font-size: 1.5rem;
    }
`;

const Icon = styled.img`
    height: 25px;
    margin-left: 5px;
    color: red;
    ${breakpoints.vp4_2} {
        height: 20px;
    }
`

export const Footer = () => {
    return (
        <FooterDiv>
            © {new Date().getFullYear()} Glendale Painting Corporation
            <a href="https://twitter.com/GlendalePtg/">
                <Icon
                    src={twitter}
                    onMouseOver={e => (e.currentTarget.src = twitterred)}
                    onMouseOut={e => (e.currentTarget.src = twitter)}
                />
            </a>
            <a href="https://www.facebook.com/Glendalepainting/">
                <Icon
                    src={facebook}
                    onMouseOver={e => (e.currentTarget.src = facebookred)}
                    onMouseOut={e => (e.currentTarget.src = facebook)}
                />
            </a>
            <a href="https://www.linkedin.com/company/glendale-painting-corp.">
                <Icon
                    src={linkedin}
                    onMouseOver={e => (e.currentTarget.src = linkedinred)}
                    onMouseOut={e => (e.currentTarget.src = linkedin)}
                />
            </a>
        </FooterDiv>
    )
}
