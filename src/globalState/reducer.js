export const mainReducer = (state, { type, payload }) => {
    switch (type) {
        case 'STORE_PAGE':
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    page: payload,
                },
            };
        case 'STORE_TAB':
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    ...payload,
                },
            };
        default:
            return state;
    }
};
