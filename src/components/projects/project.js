import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export const Project = ({ data }) => {
    console.log(data.featuredImage)
    return (
        <ProjectContainer>
            {data.featuredImage && (
                <Img
                    style={{ width: '100%' }}
                    fluid={data.featuredImage.childImageSharp.fluid}
                />
            )}
            <HoverContainer>{data.tags}</HoverContainer>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    min-width: 275px;
    margin: 15px 0;
    height: auto;
    position: relative;
`;

const HoverContainer = styled.div`
    position: absolute;
    top: 0px;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    opacity: 0;
    transition: 0.5s ease;

    &:hover {
        opacity: 1;
    }
`;
