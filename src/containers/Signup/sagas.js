import { call, put, select } from 'redux-saga/effects'
import SessionActions, { SessionSelectors } from '../../redux/SessionRedux'
import SignupActions from './redux'
import { is, path } from 'ramda'
import _ from 'lodash'
import { StackActions } from 'react-navigation'

// process UPDAATE actions
export function * signupFormSubmit (api, action) {
  /**
  * TODO: dsini logic untuk submit form signup ke server
  * data-data form ada di dalam action, key name nya "data"
  */
  console.log('[signupFormSubmit] action=', action)
  const { data } = action
  const response = yield call(api.signupFormSubmit, data)
  console.log('signupFormSubmit response=', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'signUp', 'status'], response)
  const errorBody = path(['data', 'data', 'signUp', 'error'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(SignupActions.signupFormSubmitDone({ status, errors }))
  if (_.isEmpty(errors)) yield put(StackActions.replace({ routeName: 'ScreenSignupSuccess', params: { param1: 'value1' } }))
  // if (_.isEmpty(errorMessage)) yield put(StackActions.replace({ routeName: 'ScreenSignupSuccess', params: { param1: 'value1' } }))

  // let signupFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: 'Something wrong. Please try again' }
  // if (!response.ok) {
  //   signupFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
  // } else {
  //   // catch error message
  //   // const responseErrorList = path(['data', 'errors'], response) || []
  //   let errorMessage = path(['data', 'data', 'signUp', 'errors'], response) || response.problem
  //   // for (let i = 0; i < responseErrorList.length; i++) {
  //   //   const error = responseErrorList[i]
  //   //   if (error.message && error.message.includes('email_1 dup key')) errorMessage += 'Email is currently used. Please try another email address.'
  //   // }
  //   // if (errorMessage !== '') {
  //   //   // theres still error
  //   //   signupFormSubmitMSG.rc = '99'
  //   //   signupFormSubmitMSG.rd = errorMessage
  //   // } else {
  //   //   // all success
  //   //   signupFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
  //   // }

  // }
  // yield put(SignupActions.signupPatch({ signupFormSubmitMSG }))
}
