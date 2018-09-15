import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE
} from '../constants'
import 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './../../services/http';
import Path from './../../config/path';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

//** Epic Middlewares For Auth **//
export default class AuthEpic {

    //Epic middleware for login
    static signinEpic = (action$) => {
        return action$.ofType(SIGNIN)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    AuthEpic.signInMethod(payload)
                )
                    .map((response) => {
                        console.log(response, 'response')
                        return {
                            type: SIGNIN_SUCCESS,
                            payload: response
                        }
                    })
                    .catch((err) => {
                        console.log(err, 'err')
                        return Observable.of({
                            type: SIGNIN_FAILURE,
                            payload: err.message
                        })
                    })
            })
    }

    static signInMethod = ({ username, password }) => {
        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        var poolData = {
            UserPoolId: '', // Your user pool id here
            ClientId: '' // Your client id here
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username: username,
            Pool: userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        return new Promise((resolve, reject) =>
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: result => resolve(result),
                onFailure: err => reject(err)
            })
        );
    }


    // Epic middleware for signup
    // static signupEpic = (action$) =>
    // action$.ofType(SIGNUP)
    //         .switchMap(({ payload }) => {
    //             return HttpService.post(Path.SIGNUP, payload)
    //                 .switchMap(({ response }) => {
    //                     if (response.err) {
    //                         return Observable.of({
    //                             type: SIGNUP_FAILURE,
    //                             payload: response.err
    //                         });
    //                     }
    //                     return Observable.of({
    //                         type: SIGNUP_SUCCESS,
    //                         payload: response
    //                     });
    //                 });
    //         })
    //Epic middleware for signup


    // static signupEpic = (action$) =>
    //     action$.ofType(SIGNUP)
    //         .switchMap(({ payload }) => {
    //             return Auth.signUp({
    //                 username: payload.email,
    //                 password: payload.password
    //             })
    //                 .then((success) => {
    //                     console.warn("then success")
    //                     return {
    //                         type: SIGNUP_SUCCESS,
    //                         payload: payload
    //                     }
    //                 })
    //                 .catch((error) => {
    //                     console.warn(error, "catch")
    //                     return {
    //                         type: SIGNUP_FAILURE,
    //                         payload: payload
    //                     };
    //                 })
    //         });
}



