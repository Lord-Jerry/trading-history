import ActionTypes from '../actionTypes';

const initialState = {
    currentUser: {},
    loading: false,
    authError: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.SET_USER_DATA:
        return { ...state, currentUser: { ...action.currentUser }};
    case ActionTypes.SET_AUTH_ERROR:
        return { ...state, authError: action.error };
    case ActionTypes.SET_BUTTON_LOADING:
        return { ...state, loading: action.loading };
    default:
        return state;
    }
};
