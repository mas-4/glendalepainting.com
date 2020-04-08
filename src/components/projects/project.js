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
    --photo-width: calc((100% - 60px)/3);
    width: var(--photo-width);
    max-width: 420px;
    min-width: 340px;
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

    @media (max-width: 1200px){
        --photo-width: calc((100% - 40px)/2);
        width: var(--photo-width);
    }

    @media (max-width: 800px){
        width: 100%;
    }
`;
