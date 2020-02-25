import React from 'react';
import styled from 'styled-components';

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
                    >
                        START
                    </TextButton>
                    <TextButton
                        onClick={() => {
                            if (chosenPage > 1)
                                setSelectedPage(dispatch, chosenPage - 1);
                        }}
                        color="black"
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
                    >
                        NEXT
                    </TextButton>
                    <TextButton
                        onClick={() => setSelectedPage(dispatch, totalPages)}
                        color="red"
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
    width: 25%;
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
`;

const TextButton = styled.button`
    width: 75px;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.size2};
    background-color: ${({ theme, color }) =>
        color === 'red' ? theme.red : theme.black};
    border: none;
    cursor: pointer;
    font-weight: 700;
    margin: 0 1rem;
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow};
    }
    &:focus {
        outline: none;
    }
`;
