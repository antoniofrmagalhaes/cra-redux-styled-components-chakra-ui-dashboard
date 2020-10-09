import { takeLatest, call, put, all } from 'redux-saga/effects'
import history from '../../../services/history'

import api from '../../../services/api'

import { signInFailure, signInRequest, signInSuccess } from './actions'

export function* signIn({
  payload: { email, password }
}: ReturnType<typeof signInRequest>): any {
  try {
    const response = yield call(api.post, 'sessions', { email, password })
    const { user, token } = response.data
    yield put(signInSuccess(user, token))
    api.defaults.headers.Authorization = `Bearer ${token}`
    history.push('/')
  } catch (error) {
    yield put(signInFailure())
  }
}

export function signOut() {
  history.push('/login')
}

export function setToken({ payload }: ReturnType<typeof signInSuccess>) {
  if (!payload) return
  const { token } = payload
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut)
])
