import { call, put, select } from 'redux-saga/effects'
import SessionActions, { SessionSelectors } from '../../redux/SessionRedux'
import ConfirmForgetPasswordActions from './redux'
import { is, path } from 'ramda'
import _ from 'lodash'
import { StackActions } from 'react-navigation'


export function * confirmForgetPasswordFormSubmit (api, action) {
 
  const { data } = action
  const response = yield call(api.confirmforgetPassword, data)
  console.log('confirmforgetPassword response=', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  const statusBody = path(['data', 'data', 'changePasswordViaForgetPassword', 'status'], response)
  const errorBody = path(['data', 'data', 'changePasswordViaForgetPassword', 'error'], response)

  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(ConfirmForgetPasswordActions.confirmForgetPasswordFormSubmitDone({ status, errors }))
  if (_.isEmpty(errors)) yield put(StackActions.replace({ routeName: 'ScreenForgetPasswordSuccess', params: { param1: 'value1' } }))
}