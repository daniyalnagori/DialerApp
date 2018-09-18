import {
    CALLOBJ, WORKSPACE, COLLABORATION
} from '../constants'

export default class AuthActions {

    static callObj(obj) {
        return {
            type: CALLOBJ,
            payload: obj
        }
    }

    static WorkSpaceData(id) {
        return {
            type: WORKSPACE,
            payload: id
        }
    }

    static CollaborationData(id) {
        console.log('colloabasdf', id)
        return {
            type: COLLABORATION,
            payload: id
        }
    }

}