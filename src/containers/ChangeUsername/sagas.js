import { call, put } from 'redux-saga/effects'
import ChangeUsernameActions from './redux'
import SessionActions from '../../redux/SessionRedux'
import { path } from 'ramda'
import _ from 'lodash'

export function * changeusernameSubmit (api, action) {
  console.log('invoked sagas changeusernameSubmit')
  // call api
  const { data } = action
  console.log('call api changeusernameSubmit data=>', data)
  const response = yield call(api.changeusernameSubmit, data)
  console.log('changeusernameSubmit response ', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'changeUserName', 'status'], response)
  const errorBody = path(['data', 'data', 'changeUserName', 'error'], response)
  const newToken = path(['data', 'data', 'changeUserName', 'new_token'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  const DataMSG = {
    status,
    errors
  }
  yield put(ChangeUsernameActions.changeusernameSubmitDone(DataMSG))
  // success change username, need to relogin
  // if (status === 200) yield put(SessionActions.sessionLogout({}))
  // kalo ada session baru call function sessionLoginSuccess dari session redux
  if (!_.isEmpty(newToken)) yield put(SessionActions.sessionLoginSuccess({ sessionToken: newToken }))
}
