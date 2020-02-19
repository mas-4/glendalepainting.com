import React from 'react';
import { tags } from '../../data/projectTags';
import styled from 'styled-components';

export const TagsFilter = ({ selectedFilters, changeFilters, dispatch }) => {
    const handleClick = tag => {
        if (selectedFilters.includes(tag))
            changeFilters(dispatch, 'remove', tag);
        else changeFilters(dispatch, 'add', tag);
    };
    return (
        <TagContainer>
            {tags.map(tag => (
                <Tag
                    chosen={selectedFilters.includes(tag[0])}
                    onClick={() => handleClick(tag[0])}
                    key={tag[0]}
                >
                    {tag[0]}
                </Tag>
            ))}
        </TagContainer>
    );
};

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    justify-content: align-start;
`;

const Tag = styled.div`
    color: ${({ theme }) => theme.black};
    background: ${({ chosen, theme }) =>
        chosen ? theme.red : theme.white};
    font-size: ${({ theme }) => theme.size1};
    width: auto;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px 5px;
    margin: 3px 5px;

    &:hover {
        background: ${({chosen, theme}) => chosen ? theme.red : `rgba(255, 0, 0, 0.4)`};
    }
`;
