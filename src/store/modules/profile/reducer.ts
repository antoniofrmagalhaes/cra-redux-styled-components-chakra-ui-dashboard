import { AnyAction, Reducer } from 'redux'
import produce from 'immer'
import { ProfileState } from './types'

const initialState: ProfileState = {
  name: undefined,
  email: undefined
}

const profile: Reducer<ProfileState, AnyAction> = (
  state = initialState,
  action
): ProfileState => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.name = action.payload.user.name
        draft.email = action.payload.user.email
        break
      }
      default:
        return state
    }
  })
}

export default profile
