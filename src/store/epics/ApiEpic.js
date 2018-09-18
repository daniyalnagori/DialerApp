import {
    CALLOBJ, CALLOBJ_SUCCESS, CALLOBJ_FAILURE,
    WORKSPACE, WORKSPACE_SUCCESS, WORKSPACE_FAILURE,
    COLLABORATION, COLLABORATION_SUCCESS, COLLABORATION_FAILURE
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
                return HttpService.get(Path.CAllAPI)
                    .map((response) => {
                        return {
                            type: CALLOBJ_SUCCESS,
                            payload: response
                        };
                    }).catch((error) => {
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
                return HttpService.get(Path.WORKSPACE + payload.payload)
                    .map((response) => {
                        return {
                            type: WORKSPACE_SUCCESS,
                            payload: response.response.data
                        };
                    }).catch((error) => {
                        return Observable.of({
                            type: WORKSPACE_FAILURE,
                            payload: error
                        });
                    })
            })
    }


    static CollaborationDataEpic = (action$) => {
        return action$.ofType(COLLABORATION)
            .switchMap((payload) => {
                console.log(payload, 'payload')
                return HttpService.get(Path.COLLABORATION + payload.payload)
                    .map((response) => {
                        console.log(response, 'hello1')
                        return {
                            type: COLLABORATION_SUCCESS,
                            payload: response.response.data
                        };
                    }).catch((error) => {
                        return Observable.of({
                            type: COLLABORATION_FAILURE,
                            payload: error
                        });
                    })
            })
    }
}




