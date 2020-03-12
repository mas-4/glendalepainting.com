import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints'

export const HoverData = ({ data }) => {
    let title = data.frontmatter.title;
    return (
        <HoverContainer className="mask">
            <div>
                {title !== 'Palm Beach County Convention Center' ? (
                    <>
                        <span className="project-title">
                            {title.toUpperCase()}
                        </span>
                        <span>VIEW PROPERTY</span>
                    </>
                ) : (
                    <span>VIEW ALL PROJECTS</span>
                )}
            </div>
        </HoverContainer>
    );
};

const HoverContainer = styled.div`
    position: absolute;
    top: 0px;
    background: rgba(200, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5% 0;

    div {
        border: 1px solid white;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    span {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.size3};
        font-weight: 400;
        margin: 20px 0 10px;
    }

    .project-title {
        font-size: ${({ theme }) => theme.size5};
        ${breakpoints.vp7} {
            font-size: ${({theme}) => theme.size3};
        }
    }
`;
