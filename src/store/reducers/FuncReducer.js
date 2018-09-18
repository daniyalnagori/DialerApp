import {
    COLLABORATIONWID
} from '../constants'

const initialState = {
    collaborationWID: ''
}

export default function FuncReducer(state = initialState, action) {
    switch (action.type) {

        case COLLABORATIONWID:
            return {
                ...state,
                collaborationWID: action.payload
            }

        default:
            return state
    }
}