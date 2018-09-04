import {
    CALLOBJ
} from '../constants'

export default class AuthActions {

    static callObj(obj) {
        console.log(obj)
        return {
            type: CALLOBJ,
            payload: obj
        }
    }

}