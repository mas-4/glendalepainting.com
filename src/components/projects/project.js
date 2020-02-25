import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { HoverData } from './hoverdata';

export const Project = ({ data, slug, handleTagClick }) => {
    return (
        <ProjectContainer>
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
            <Link to={`${slug}`}>
                <HoverData data={data} handleTagClick={handleTagClick} />
            </Link>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    width: 420px;
    height: 280px;
    position: relative;
    overflow: hidden;
    margin: 10px;
    &:hover img {
        transform: scale(1.2);
    }

    &:hover .mask {
        opacity: 1;
    }

    .hoverContainer {
        cursor: pointer;
    }
`;
