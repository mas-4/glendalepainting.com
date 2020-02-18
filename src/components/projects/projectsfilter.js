import React from 'react';
import styled from 'styled-components';

export const ProjectsFilter = ({ selectedTab, setSelectedTab, dispatch }) => {
    let tabSelected = {
        'Show All': false,
        'New Construction': false,
        Repaint: false,
    };
    tabSelected[selectedTab] = true;
   
    return (
        <FilterContainer>
            <ButtonContainer>
                <FilterButton
                    onClick={e => setSelectedTab(dispatch, e.target.name)}
                    name="Show All"
                    width="120px"
                    chosen={tabSelected['Show All']}
                >
                    SHOW ALL
                </FilterButton>
                <FilterButton
                    onClick={e => setSelectedTab(dispatch, e.target.name)}
                    name="New Construction"
                    width="240px"
                    chosen={tabSelected['New Construction']}
                >
                    NEW CONSTRUCTION
                </FilterButton>
                <FilterButton
                    onClick={e => setSelectedTab(dispatch, e.target.name)}
                    name="Repaint"
                    width="240px"
                    chosen={tabSelected['Repaint']}
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
