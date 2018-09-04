import { combineReducers } from 'redux'
import authReducer from './authReducer'
import ApiReducer from './ApiReducer'

const rootReducer = combineReducers({
    userAuth: authReducer,
    ApiReducer: ApiReducer
})

export default rootReducer