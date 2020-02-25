import React, { useState } from 'react';
import styled from 'styled-components';

export const TagsFilter = ({
    selectedFilters,
    changeFilters,
    dispatch,
    tags,
    handleTagClick
}) => {
    const [tagButtonText, setTagButtonText] = useState(true);

    let displayedTags = tagButtonText ? tags.slice(0, 10) : tags;

    return (
        <TagContainer>
            {displayedTags.map(tag => (
                <Tag
                    chosen={selectedFilters.includes(tag[0])}
                    onClick={(e) => handleTagClick(e, tag[0])}
                    key={tag[0]}
                >
                    {`${tag[0]} (${tag[1]})`}
                </Tag>
            ))}
            {tags.length > 10 && (
                <TagButton onClick={() => setTagButtonText(!tagButtonText)}>
                    {tagButtonText ? 'Show More' : 'Show Less'}
                </TagButton>
            )}
        </TagContainer>
    );
};

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    justify-content: align-start;
    margin-bottom: 2rem;
`;

const Tag = styled.div`
    color: ${({ chosen, theme }) => (chosen ? theme.white : theme.black)};
    background: ${({ chosen, theme }) => (chosen ? theme.red : theme.white)};
    font-size: ${({ theme }) => theme.size1};
    letter-spacing: 0.05rem;
    width: auto;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    margin: 5px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    &:hover {
        background: ${({ chosen, theme }) =>
            chosen ? theme.red : `rgba(255, 0, 0, 0.4)`};
        transform: scale(1.05);
    }
`;

const TagButton = styled.button`
    color: ${({ theme }) => theme.red};
    background: ${({ theme }) => theme.white};
    border: none;
    font-size: ${({ theme }) => theme.size1};
    line-height: ${({ theme }) => theme.size1};
    padding: 0;
    cursor: pointer;
    flex: 10;
    text-align: right;
    margin: 5px;
    padding-right: 15px;

    &:focus {
        outline: none;
    }
`;
