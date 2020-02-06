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
                    imgStyle={{transition: 'opacity 0.5s ease 0s, transform 1s ease'}}
                    fixed={{
                        ...data.featuredImage.childImageSharp.fixed,
                        aspectRatio: 1.5,
                    }}
                />
            )}
            <Link to={`/${slug}`}>
                <HoverContainer className="mask">{data.tags}</HoverContainer>
            </Link>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    width: 420px;
    margin: 10px 10px;
    height: auto;
    position: relative;
    overflow: hidden;

    &:hover img {
        transform: scale(1.2);
    }

    &:hover .mask {
        opacity: 0.7;
    }
`;

const HoverContainer = styled.div`
    position: absolute;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
`;
