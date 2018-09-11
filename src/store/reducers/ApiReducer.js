import {
    CALLOBJ, CALLOBJ_SUCCESS, CALLOBJ_FAILURE
} from '../constants'

const initialState = {
    isCallSuccess: false,
    isCallFailure: false,

}

export default function ApiReducer(state = initialState, action) {
    switch (action.type) {
        case CALLOBJ:
            return {
                ...state,
                isCallSuccess: false,
                isCallFailure: false,
            }

        case CALLOBJ_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isCallSuccess: true,
            }

        case CALLOBJ_FAILURE:
            return {
                ...state,
                isCallFailure: true,
            }

        default:
            return state
    }
}