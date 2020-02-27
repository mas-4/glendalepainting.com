import React, { useState } from 'react';
import styled from 'styled-components';

export const TagsFilter = ({ selectedFilter, tags, handleTagClick }) => {
    const [tagButtonText, setTagButtonText] = useState(false);
    let selectedIndex = tags.findIndex(tag => tag[0] === selectedFilter);
    let sliceIndex = selectedIndex > 10 ? selectedIndex + 1 : 10;
    let displayedTags = tagButtonText ? tags : tags.slice(0, sliceIndex);

    return (
        <FilterContainer>
            <TagContainer height={tagButtonText  ? 'auto' : '38px'}>
                {tags.map(tag => (
                    <Tag
                        chosen={selectedFilter === tag[0]}
                        onClick={e => handleTagClick(e, tag[0])}
                        key={tag[0]}
                    >
                        {`${tag[0]} (${tag[1]})`}
                    </Tag>
                ))}
            </TagContainer>
            {tags.length > 10 && (
                <TagButton
                    onClick={() => setTagButtonText(prevState => !prevState)}
                >
                    {tagButtonText ? 'Show Less' : 'Show More'}
                </TagButton>
            )}
        </FilterContainer>
    );
};

const FilterContainer = styled.div`
    width: 69%;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    align-content: flex-start;
`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-height: ${({ height }) => height};
    overflow: hidden;
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
        transition: 0.5s;
        }
`;

const TagButton = styled.button`
    color: ${({ theme }) => theme.red};
    background: ${({ theme }) => theme.white};
    border: none;
    font-size: ${({ theme }) => theme.size1};
    line-height: 38px;
    padding: 0;
    cursor: pointer;
    white-space: nowrap;
    height: 38px;

    &:focus {
        outline: none;
    }
`;
