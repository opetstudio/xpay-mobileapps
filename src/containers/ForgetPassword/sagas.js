import { call, put, select } from 'redux-saga/effects'
import SessionActions, { SessionSelectors } from '../../redux/SessionRedux'
import ForgetPasswordActions from './redux'
import { is, path } from 'ramda'
import _ from 'lodash'
import { StackActions } from 'react-navigation'

// process UPDAATE actions
export function * forgetPasswordFormSubmit (api, action) {
  /**
  * TODO: dsini logic untuk submit form signup ke server
  * data-data form ada di dalam action, key name nya "data"
  */
  console.log('[signupFormSubmit] action=', action)
  const { data } = action
  const response = yield call(api.forgetPassword, data)
  console.log('forgetPassword response=', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  const statusBody = path(['data', 'data', 'forgetPasswordSendOtp', 'status'], response)
  const errorBody = path(['data', 'data', 'forgetPasswordSendOtp', 'error'], response)
  const otpRefnumber = path(['data', 'data', 'forgetPasswordSendOtp', 'otpRefNum'], response)

  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(ForgetPasswordActions.forgetPasswordFormSubmitDone({ status, errors ,otpRefnumber }))
  if (_.isEmpty(errors)) yield put(StackActions.replace({ routeName: 'ScreenConfirmForgetPassword', params: { param1: 'value1' } }))
}