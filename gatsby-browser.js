/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import {StateContext, initialState, mainReducer } from './src/globalState';

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <StateProvider initialState={initialState} reducer={mainReducer}>
                {element}
            </StateProvider>
        </ThemeProvider>
    );
};

const StateProvider = ({ initialState, reducer, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};
