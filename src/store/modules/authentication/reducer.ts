import { AnyAction, Reducer } from 'redux'
import produce from 'immer'
import { AuthState } from './types'

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  token: null
}

const system: Reducer<AuthState, AnyAction> = (
  state = initialState,
  action
): AuthState => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token
        draft.isAuthenticated = true
        break
      }
      case '@auth/SIGN_OUT': {
        draft.token = null
        draft.isAuthenticated = false
        break
      }
      default:
        return state
    }
  })
}

export default system
