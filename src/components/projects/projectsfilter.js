import React from 'react';
import styled from 'styled-components';

export const ProjectsFilter = ({ selectedTab, setSelectedTab }) => {
    let tabSelected = {
        'show all': false,
        'new construction': false,
        repaint: false,
    };
    tabSelected[selectedTab] = true;

    return (
        <FilterContainer>
            <ButtonContainer>
                <FilterButton
                    onClick={e => setSelectedTab(e.target.name)}
                    name="show all"
                    width="120px"
                    chosen={tabSelected['show all']}
                >
                    SHOW ALL
                </FilterButton>
                <FilterButton
                    onClick={e => setSelectedTab(e.target.name)}
                    name="new construction"
                    width="240px"
                    chosen={tabSelected['new construction']}
                >
                    NEW CONSTRUCTION
                </FilterButton>
                <FilterButton
                    onClick={e => setSelectedTab(e.target.name)}
                    name="repaint"
                    width="240px"
                    chosen={tabSelected['repaint']}
                >
                    REPAINT/RESTORATION
                </FilterButton>
            </ButtonContainer>
        </FilterContainer>
    );
};

const FilterContainer = styled.div`
    margin: 0 auto;
    h4 {
        color: ${({ theme }) => theme.black};
        font-size: ${({ theme }) => theme.size2};
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FilterButton = styled.button`
    height: 50px;
    width: ${props => props.width};
    font-size: ${({ theme }) => theme.size2};
    font-weight: 700;
    color: ${({ theme }) => theme.white};
    background: ${props =>
        props.chosen ? props.theme.red : props.theme.lightGray};
    border: none;
    cursor: pointer;
   
    &:focus {
        outline: none;
    }
`;
