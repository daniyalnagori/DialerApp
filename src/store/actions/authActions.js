import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    CREATE_PREDICTORS_FIRSTDISPLAY, CREATE_PREDICTORS_SECONDDISPLAY, CREATE_PREDICTORS_THIRDDISPLAY,
    MODALTYPE_FIRSTDISPLAY, MODALTYPE_SECONDDISPLAY, MODALTYPE_THIRDDISPLAY,
    MODALTYPE2_FIRSTDISPLAY, MODALTYPE2_SECONDDISPLAY, MODALTYPE2_THIRDDISPLAY,
    PREDICTORS_EDIT_MODEL_DATA, DATASET_COMPONENT, DATASET_COMP_FEATURES, OPTIMIZER_EDIT_MODAL,
    CREATE_PREICTORS_FLAG, PREDICTORS_COMP_FEATURES, CREATE_AN_OPTIMIZER, EDIT_DASHBOARD_MODAL,
    STEPPER_STEP, CREATE_PREDICTORS_COMPONENT_CHANGE, OPTIMIZER_COMP_FEATURES, CREATE_A_DASHBOARD,
    PREDICTORS_EDIT_MODAL_FLAG, DATASET_POPOVER , PREDICTORS_POPOVER, CREATE_PREDICTORS_FLAG , OPTIMIZER_POPOVER
} from '../constants'

export default class AuthActions {

    static signup(user) {
        return {
            type: SIGNUP,
            payload: user
        }
    }

    static signupSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }

    static signupFailure(error) {
        return {
            type: SIGNUP_FAILURE,
            error: error
        }
    }

    static signin(user) {
        return {
            type: SIGNIN,
            payload: user
        }
    }

    static signinSuccess(data) {
        return {
            type: SIGNIN_SUCCESS,
            payload: data
        }
    }

    static signinFailure(error) {
        return {
            type: SIGNIN_FAILURE,
            error: error
        }
    }

    static logout() {
        return {
            type: LOGOUT
        }
    }

    static logoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }

    static logoutFailure(error) {
        return {
            type: LOGOUT_FAILURE,
            error: error
        }
    }

}