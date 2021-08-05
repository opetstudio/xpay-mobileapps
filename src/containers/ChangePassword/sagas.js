import { call, put } from 'redux-saga/effects'
import ChangepasswordActions from './redux'
import SessionActions from '../../redux/SessionRedux'
import { path } from 'ramda'
import _ from 'lodash'

export function * changepasswordSubmit (api, action) {
  console.log('invoked sagas changepasswordSubmit')
  const { data } = action
  const response = yield call(api.changepasswordSubmit, data)
  console.log('changepasswordSubmit response ', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'changeUserPassword', 'status'], response)
  const errorBody = path(['data', 'data', 'changeUserPassword', 'error'], response)
  const newToken = path(['data', 'data', 'changeUserPassword', 'new_token'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(ChangepasswordActions.changepasswordSubmitDone({ status, errors }))
  // success change username, need to relogin
  // if (status === 200) yield put(SessionActions.sessionLogout({}))
  if (!_.isEmpty(newToken)) yield put(SessionActions.sessionLoginSuccess({ sessionToken: newToken }))
}
