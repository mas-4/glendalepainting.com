import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export const Project = ({ data, slug }) => {
    return (
        <ProjectContainer>
            {data.featuredImage && (
                <Img
                    style={{ width: '100%' }}
                    fluid={{
                        ...data.featuredImage.childImageSharp.fluid,
                        aspectRatio: 1.5,
                    }}
                />
            )}
            <Link to={`/${slug}`}>
                <HoverContainer>{data.tags}</HoverContainer>
            </Link>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    width: 380px;
    margin: 10px 10px;
    height: auto;
    position: relative;
`;

const HoverContainer = styled.div`
    position: absolute;
    top: 0px;
    background: #fff;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;

    &:hover {
        opacity: 0.7;
    }
`;
