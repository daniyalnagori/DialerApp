import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants'

export default class AuthActions {

    static SignIn(obj) {
        return {
            type: SIGNIN,
            payload: obj
        }
    }


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