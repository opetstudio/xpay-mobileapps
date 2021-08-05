import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  forgetPasswordFormReset : null,
  forgetPasswordFormSubmit : ['data'],
  forgetPasswordFormSubmitDone: ['data'],
  reset: null
})

export const ForgetPasswordTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  errors: [],
  status: 0,
  isRequest: false,
  otpRefnumber:'',
  email:''
})
export const forgetPasswordFormReset = (state, { data }) => state.merge({ isRequest: false, errors: [], status: 0,otpRefnumber:'' })
export const forgetPasswordFormSubmit = (state, { data }) => state.merge({ email:data.email,isRequest: true, errors: [], status: 0,otpRefnumber:'' })
export const forgetPasswordFormSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FORGET_PASSWORD_FORM_SUBMIT]: forgetPasswordFormSubmit ,
  [Types.FORGET_PASSWORD_FORM_SUBMIT_DONE]: forgetPasswordFormSubmitDone ,
  [Types.FORGET_PASSWORD_FORM_RESET]: forgetPasswordFormReset ,
  [Types.RESET]: (state) => INITIAL_STATE
})
