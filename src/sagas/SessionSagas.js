import { call, put, select } from 'redux-saga/effects'
import SessionActions, { SessionSelectors } from '../redux/SessionRedux'
import { is, path } from 'ramda'
import { isEmptyOrNull } from '../lib/Utils'
import _ from 'lodash'
import { StackActions } from 'react-navigation'

// process UPDAATE actions
export function * sessionUpdate (action) {
  console.log('[SessionSagas] sessionUpdate action=', action)
  const { data } = action
  yield put(SessionActions.sessionUpdate(data))
}
export function * sessionLogin (api, action) {
  console.log('[SessionSagas] sessionLogin action=', action)
  const { data } = action
  const response = yield call(api.sessionLogin, data)
  console.log('response=', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'login', 'status'], response)
  const errorBody = path(['data', 'data', 'login', 'error'], response)
  const sessionToken = path(['data', 'data', 'login', 'access_token'], response)
  const userId = path(['data', 'data', 'login', 'user', 'user_id'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(SessionActions.sessionLoginDone({ status, errors, userId }))
  if (status === 200 && _.isEmpty(errors)) {
    yield put(SessionActions.sessionLoginSuccess({ sessionToken, userId }))
    // redirect
    // redirect nya dari component
    // yield put(StackActions.replace({ routeName: 'loggedinNavigator' }))
  }
  // let sessionLoginMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  // if (!response.ok) {
  //   sessionLoginMSG = { ir: false, rc: 'MBDD99', rm: 'FAILED_SYSTEM', rd: response.problem }
  //   return yield put(SessionActions.sessionPatch({ sessionLoginMSG }))
  // }
  // const sessionToken = path(['data', 'data', 'login', 'access_token'], response)
  // const userId = path(['data', 'data', 'login', 'user', 'user_id'], response)
  // const errorMessage = path(['data', 'data', 'login', 'error'], response)
  // if (isEmptyOrNull(sessionToken)) {
  //   sessionLoginMSG = { ir: false, rc: 'MBDD99', rm: 'FAILED_SYSTEM', rd: errorMessage }
  //   return yield put(SessionActions.sessionPatch({ sessionLoginMSG }))
  // } else {
  //   sessionLoginMSG = { ir: false, rc: 'MBDD00', rm: 'SUCCESS', rd: '' }
  // }
  // if (sessionLoginMSG.rc === 'MBDD00') return yield put(SessionActions.sessionLoginSuccess({ sessionToken, sessionLoginMSG, userId }))
  // else return yield put(SessionActions.sessionLoginFailed({ sessionToken: '', sessionLoginMSG }))
}
export function * sessionLogout (api, action) {
  console.log('[SessionSagas] sessionLogout action=', action)
  const { data } = action
  const response = yield call(api.sessionLogout, data, {})
  yield put(SessionActions.sessionLogoutSuccess({ isLoggedIn: false, userId: '' }))
}
