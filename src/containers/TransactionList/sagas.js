import { call, put, select } from 'redux-saga/effects'
import SignupActions from './redux'
import { is, path } from 'ramda'
import _ from 'lodash'
import { StackActions } from 'react-navigation'

// process UPDAATE actions
export function * transactionHistory (api, action) {
  /**
  * TODO: dsini logic untuk submit form signup ke server
  * data-data form ada di dalam action, key name nya "data"
  */
  console.log('[transactionList] api=', api)
  console.log('[transactionList] action=', action)
  const { data } = action
  const response = yield call(api.transactionHistory, data)
  console.log('transactionHistory response=', response)
  const errorMessage = path(['data', 'data', 'transactionHistory', 'error'], response) || ''
  const transactionHistoryList = path(['data', 'data', 'transactionHistory', 'transaction_history'], response) || {}
  // console.log('maiki errorMessage = ', errorMessage)
  yield put(SignupActions.transactionHistoryDone({ errorMessage, transactionHistoryList }))
//   if (_.isEmpty(errorMessage)) yield put(StackActions.replace({ routeName: 'ScreenSignupSuccess', params: { param1: 'value1' } }))

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
