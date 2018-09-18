import {
    CALLOBJ, CALLOBJ_SUCCESS, CALLOBJ_FAILURE,
    WORKSPACE, WORKSPACE_SUCCESS, WORKSPACE_FAILURE,
    COLLABORATION, COLLABORATION_SUCCESS, COLLABORATION_FAILURE
} from '../constants'

const initialState = {
    isCallSuccess: false,
    isCallFailure: false,
    isWorkSpaceSuccess: false,
    isWorkSpaceFailure: false,
    WorkSpaceSuccess: [],
    WorkSpaceError: '',
    isCollaborationSuccess: false,
    isCollaborationFailure: false,
    CollaborationSuccess: [],
    CollaborationError: '',
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
            return {
                ...state,
                isCallSuccess: true,
            }

        case CALLOBJ_FAILURE:
            return {
                ...state,
                isCallFailure: true,
            }

        case WORKSPACE:
            return {
                ...state,
                isWorkSpaceSuccess: false,
                isWorkSpaceFailure: false,
            }

        case WORKSPACE_SUCCESS:
            return {
                ...state,
                WorkSpaceSuccess: action.payload,
            }

        case WORKSPACE_FAILURE:
            return {
                ...state,
                WorkSpaceError: action.payload,
            }

        case COLLABORATION:
            return {
                ...state,
                isCollaborationSuccess: false,
                isCollaborationFailure: false,
            }

        case COLLABORATION_SUCCESS:
            return {
                ...state,
                CollaborationSuccess: action.payload,
            }

        case COLLABORATION_FAILURE:
            return {
                ...state,
                CollaborationError: action.payload,
            }

        default:
            return state
    }
}