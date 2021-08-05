import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  confirmForgetPasswordFormReset : null,
  confirmForgetPasswordFormSubmit : ['data'],
  confirmForgetPasswordFormSubmitDone: ['data'],
  reset: null
})

export const ConfirmForgetPasswordTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  errors: [],
  status: 0,
  isRequest: false
})
export const confirmForgetPasswordFormReset = (state, { data }) => state.merge({ isRequest: false, errors: [], status: 0 })
export const confirmForgetPasswordFormSubmit = (state, { data }) => state.merge({ isRequest: true, errors: [], status: 0 })
export const confirmForgetPasswordFormSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })


export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONFIRM_FORGET_PASSWORD_FORM_SUBMIT]: confirmForgetPasswordFormSubmit ,
  [Types.CONFIRM_FORGET_PASSWORD_FORM_SUBMIT_DONE]: confirmForgetPasswordFormSubmitDone ,
  [Types.CONFIRM_FORGET_PASSWORD_FORM_RESET]: confirmForgetPasswordFormReset ,
  [Types.RESET]: (state) => INITIAL_STATE
})
