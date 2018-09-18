import {
    COLLABORATIONWID
} from '../constants'

export default class FunctAction {

    static CollaborationWID(id) {
        console.log(id)
        return {
            type: COLLABORATIONWID,
            payload: id
        }
    }

}