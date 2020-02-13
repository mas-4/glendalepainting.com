export const storePageAction = (dispatch, pageNum) => {
    dispatch({type: 'STORE_PAGE', payload: pageNum})
}