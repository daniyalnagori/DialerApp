import { combineReducers } from 'redux'
import authReducer from './authReducer'
import ApiReducer from './ApiReducer'
import FuncReducer from './FuncReducer'

const rootReducer = combineReducers({
    userAuth: authReducer,
    ApiReducer: ApiReducer,
    FuncReducer: FuncReducer
})

export default rootReducer