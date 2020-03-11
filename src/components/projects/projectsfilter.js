import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

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
    width: 90%;
    max-width: 675px;
    margin: 0 auto 2rem;
    display: flex;
    justify-content: space-between;

    ${breakpoints.vp7} {
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
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
    margin: 5px 0 5px;

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
        background: ${({ chosen, theme }) =>
            chosen ? theme.red : `rgba(255, 0, 0, 0.4)`};
        transition: 0.3s;
    }

    &:focus {
        outline: none;
    }

    ${breakpoints.vp7} {
        width: 240px;
    }
`;
