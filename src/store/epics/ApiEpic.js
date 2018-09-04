import {
    CALLOBJ, CALLOBJ_SUCCESS, CALLOBJ_FAILURE
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
            .switchMap(({ payload }) => {
                console.log(payload, "asdasdasd")
                return HttpService.post(Path.CAllAPI, payload)
                    .switchMap(({ response }) => {
                        console.log(response)
                        if (response) {
                            return Observable.of({
                                type: CALLOBJ_SUCCESS,
                                payload: response

                            });
                        }
                        return Observable.of({
                            type: CALLOBJ_FAILURE,
                            payload: response
                        });
                    });
            })
    }
}



