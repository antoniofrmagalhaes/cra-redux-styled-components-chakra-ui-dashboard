export interface User {
  name: string
  email: string
}

export interface SignInRequest {
  email: string
  password: string
}

export interface AuthState {
  isAuthenticated: boolean
  loading: boolean
  token: string | null
}

interface SignInRequestAction {
  type: string
  payload: SignInRequest
}

interface SignInSuccess {
  type: string
  payload: {
    user: User
    token: string
  }
}

interface SignInFailure {
  type: string
}

interface SignOutAction {
  type: string
}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccess
  | SignInFailure
  | SignOutAction

// src/store/system/types.ts
// export const UPDATE_SESSION = 'UPDATE_SESSION'

// export interface SystemState {
//   loggedIn: boolean
//   session: string
//   userName: string
// }

// interface UpdateSessionAction {
//   type: typeof UPDATE_SESSION
//   payload: SystemState
// }

// export type SystemActionTypes = UpdateSessionAction
