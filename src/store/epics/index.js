import { combineEpics } from 'redux-observable';

import AuthEpic from './authEpic'
import ApiEpic from './ApiEpic'

const rootEpic = combineEpics(
    ApiEpic.CallEpic,
    AuthEpic.signinEpic
);

export default rootEpic;