export const mainReducer = (state, { type, payload }) => {
    switch (type) {
        case 'STORE_PAGE':
            return {
                ...state,
                pageInfo:{
                    ...state.pageInfo,
                    number: payload
                }
            }
        default:
            return state;
    }
};
