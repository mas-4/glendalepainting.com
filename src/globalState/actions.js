export const setSelectedPage = (dispatch, page) => {
    dispatch({type: 'STORE_PAGE', payload: page})
}

export const setSelectedTab = (dispatch, selection) => {
    dispatch({type: "STORE_TAB", payload: {page: 1, tab: selection}})
}