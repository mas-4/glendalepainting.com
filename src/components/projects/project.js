import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { HoverData } from './hoverdata';

export const Project = ({ data, slug }) => {
    return (
        <ProjectContainer>
            {data.featuredImage && (
                <Img
                    style={{ width: '100%' }}
                    imgStyle={{
                        transition: 'opacity 0.5s ease 0s, transform 1s ease',
                    }}
                    fixed={{
                        ...data.featuredImage.childImageSharp.fixed,
                        aspectRatio: 1.5,
                    }}
                />
            )}
            <Link to={`${slug}`}>
                <HoverData data={data} />
            </Link>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    width: 420px;
    height: auto;
    position: relative;
    overflow: hidden;
    margin: 10px;
    &:hover img {
        transform: scale(1.2);
    }

    &:hover .mask {
        opacity: 1;
    }
`;
