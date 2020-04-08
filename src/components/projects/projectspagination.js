import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const ProjectsPagination = ({
    setSelectedPage,
    dispatch,
    totalPages,
    chosenPage,
}) => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    return (
        <>
            {pageNumbers.length > 1 && (
                <PaginateContainer>
                    <TextButton
                        onClick={() => setSelectedPage(dispatch, 1)}
                        color="black"
                        display="temporary"
                        disabled={chosenPage === 1}
                    >
                        START
                    </TextButton>
                    <TextButton
                        onClick={() => {
                            if (chosenPage > 1)
                                setSelectedPage(dispatch, chosenPage - 1);
                        }}
                        color="black"
                        display="permanent"
                        disabled={chosenPage === 1}
                    >
                        PREV
                    </TextButton>
                    {pageNumbers.map(number => {
                        return (
                            <PageButton
                                chosen={number === chosenPage}
                                key={number}
                                onClick={() =>
                                    setSelectedPage(dispatch, number)
                                }
                            >
                                {number}
                            </PageButton>
                        );
                    })}
                    <TextButton
                        onClick={() => {
                            if (chosenPage < totalPages)
                                setSelectedPage(dispatch, chosenPage + 1);
                        }}
                        color="red"
                        display="permanent"
                        disabled={chosenPage === totalPages}
                    >
                        NEXT
                    </TextButton>
                    <TextButton
                        onClick={() => setSelectedPage(dispatch, totalPages)}
                        color="red"
                        display="temporary"
                        disabled={chosenPage === totalPages}
                    >
                        END
                    </TextButton>
                </PaginateContainer>
            )}
        </>
    );
};

const PaginateContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-top: 15px;
`;

const PageButton = styled.button`
    width: 40px;
    background-color: #fff;
    font-size: ${({ theme }) => theme.size2};
    color: ${({ theme, chosen }) => (chosen ? theme.red : theme.black)};
    border: none;
    font-weight: 700;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    ${breakpoints.vp6} {
        display: none;
    }
`;

const TextButton = styled.button`
    width: 75px;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.size2};
    background-color: ${({ theme, color, disabled }) =>
        disabled ? theme.gray : color === 'red' ? theme.red : theme.black};
    border: none;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    font-weight: 700;
    margin: 0 1rem;
    &:hover {
        box-shadow: ${({ theme, disabled }) =>
            disabled ? 'none' : theme.boxShadow};
    }
    &:focus {
        outline: none;
    }
    ${breakpoints.vp6} {
        width: 45%;
        display: ${({ display }) =>
            display === 'permanent' ? 'inline' : 'none'};
    }
`;
