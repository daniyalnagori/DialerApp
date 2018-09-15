import {
    CALLOBJ, CALLOBJ_SUCCESS, CALLOBJ_FAILURE,
    WORKSPACE, WORKSPACE_SUCCESS, WORKSPACE_FAILURE
} from '../constants'
import 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './../../services/http';
import Path from './../../config/path';
// import { Auth } from "aws-amplify";

//** Epic Middlewares For Auth **//
export default class ApiEpic {

    //Epic middleware for login
    static CallEpic = (action$) => {
        return action$.ofType(CALLOBJ)
            .switchMap(() => {
                console.log("asdasdasd")
                return HttpService.get(Path.CAllAPI)
                    .map((response) => {
                        console.log("asd123", response)
                        return {
                            type: CALLOBJ_SUCCESS,
                            payload: response
                        };
                    }).catch((error) => {
                        console.log("asd", error)
                        return Observable.of({
                            type: CALLOBJ_FAILURE,
                            payload: error
                        });
                    })
            })
    }


    static WorkSpaceDataEpic = (action$) => {
        return action$.ofType(WORKSPACE)
            .switchMap((payload) => {
                console.log(payload, 'payload')
                return HttpService.get(Path.WORKSPACE + payload.payload)
                    .map((response) => {
                        console.log("asd123", response)
                        return {
                            type: CALLOBJ_SUCCESS,
                            payload: response
                        };
                    }).catch((error) => {
                        console.log("asd", error)
                        return Observable.of({
                            type: CALLOBJ_FAILURE,
                            payload: error
                        });
                    })
            })
    }
}




