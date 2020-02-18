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
        <div>
            {tags.map(tag => (
                <Tag
                    chosen={selectedFilters.includes(tag[0])}
                    onClick={() => handleClick(tag[0])}
                    key={tag[0]}
                >
                    {tag[0]}
                </Tag>
            ))}
        </div>
    );
};

const Tag = styled.div`
    color: ${({ theme }) => theme.black};
    background: ${({ chosen, theme }) =>
        chosen ? 'rgba(255, 0, 0, 0.8)' : theme.white};
    font-size: ${({ theme }) => theme.size1};
    width: auto;
    margin: 5px;
    padding: 3px 6px;
    border-radius: 5px;
`;
