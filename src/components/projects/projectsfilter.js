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
        <ButtonContainer>
            <FilterButton
                onClick={e => setSelectedTab(dispatch, e.target.name)}
                name="Show All"
                width="18%"
                chosen={tabSelected['Show All']}
            >
                SHOW ALL
            </FilterButton>
            <FilterButton
                onClick={e => setSelectedTab(dispatch, e.target.name)}
                name="New Construction"
                width="38%"
                chosen={tabSelected['New Construction']}
            >
                NEW CONSTRUCTION
            </FilterButton>
            <FilterButton
                onClick={e => setSelectedTab(dispatch, e.target.name)}
                name="Repaint"
                width="38%"
                chosen={tabSelected['Repaint']}
            >
                REPAINT / RESTORATION
            </FilterButton>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    width: 35%;
    margin: 0 auto 2rem;
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

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
    }

    &:focus {
        outline: none;
    }
`;
