import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    CREATE_PREDICTORS_FIRSTDISPLAY, CREATE_PREDICTORS_SECONDDISPLAY, CREATE_PREDICTORS_THIRDDISPLAY,
    MODALTYPE_FIRSTDISPLAY, MODALTYPE_SECONDDISPLAY, MODALTYPE_THIRDDISPLAY,
    MODALTYPE2_FIRSTDISPLAY, MODALTYPE2_SECONDDISPLAY, MODALTYPE2_THIRDDISPLAY, OPTIMIZER_EDIT_MODAL,
    CREATE_PREICTORS_FLAG, PREDICTORS_EDIT_MODEL_DATA, DATASET_COMPONENT, DATASET_COMP_FEATURES,
    STEPPER_STEP, CREATE_PREDICTORS_COMPONENT_CHANGE, PREDICTORS_COMP_FEATURES, CREATE_AN_OPTIMIZER, OPTIMIZER_COMP_FEATURES,
    EDIT_DASHBOARD_MODAL, CREATE_A_DASHBOARD, PREDICTORS_EDIT_MODAL_FLAG, DATASET_POPOVER, PREDICTORS_POPOVER, CREATE_PREDICTORS_FLAG,
    OPTIMIZER_POPOVER
} from '../constants'

const initialState = {
    user: {},
    authUser: {},
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    signedUp: false
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signedUp: true,
                authUser: action.payload,
                isLoading: false,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case SIGNIN:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                authUser: action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }

        default:
            return state
    }
}