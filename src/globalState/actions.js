export const STORE_PAGE = 'STORE_PAGE';
export const STORE_TAB = 'STORE_TAB';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

let filterDict = {
    clear: CLEAR_FILTERS,
    add: ADD_FILTER,
    remove: REMOVE_FILTER,
};

export const setSelectedPage = (dispatch, page) => {
    dispatch({ type: STORE_PAGE, payload: page });
};

export const setSelectedTab = (dispatch, selection) => {
    dispatch({ type: STORE_TAB, payload: { page: 1, tab: selection } });
};

export const changeFilters = (dispatch, option, selection = '') => {
    dispatch({ type: filterDict[option], payload: selection });
};
