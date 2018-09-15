import {
    CALLOBJ, WORKSPACE
} from '../constants'

export default class AuthActions {

    static callObj(obj) {
        return {
            type: CALLOBJ,
            payload: obj
        }
    }

    static WorkSpaceData(id) {
        console.log(id, 'action')
        return {
            type: WORKSPACE,
            payload: id
        }
    }

}