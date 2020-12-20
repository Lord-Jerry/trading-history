import { loginService, registerUserService } from '../../services/auth';
import ActionTypes from '../actionTypes';

export const setLoading = (loadingState) => ({
    type: ActionTypes.SET_BUTTON_LOADING,
    loading: loadingState,
});

export const setUserData = (data) => ({
    type: ActionTypes.SET_USER_DATA,
    currentUser: data,
});

export const setAuthError = (error) => ({
    type: ActionTypes.SET_AUTH_ERROR,
    error,
});
export const loginUser = (body) => async (dispatch) => {
    try {
        dispatch(setAuthError(''));
        dispatch(setLoading(true));
        const {
            data: { user, token },
        } = await loginService(body);
        dispatch(setUserData(user, token));
        dispatch(setLoading(false));
    } catch (err) {
        dispatch(setAuthError(err?.response?.data?.message));
        dispatch(setLoading(false));
    }
};

export const createUser = (body) => async (dispatch) => {
    try {
        dispatch(setAuthError(''));
        dispatch(setLoading(true));
        const {
            data: { user, token },
        } = await registerUserService(body);
        dispatch(setUserData(user, token));
        dispatch(setLoading(false));
    } catch (err) {
        dispatch(setAuthError(err?.response?.data?.message));
        dispatch(setLoading(false));
    }
};
