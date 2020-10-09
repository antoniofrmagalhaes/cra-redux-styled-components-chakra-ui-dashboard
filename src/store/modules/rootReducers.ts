import { combineReducers } from 'redux'

import authentication from './authentication/reducer'
import profile from './profile/reducer'

export const rootReducers = combineReducers({ authentication, profile })

export type RootState = ReturnType<typeof rootReducers>
