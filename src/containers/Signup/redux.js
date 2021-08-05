import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  signupFormReset: null,
  signupFormSubmit: ['data'],
  signupFormSubmitDone: ['data'],
  reset: null
})

export const SignupTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  errors: [],
  status: 0,
  isRequest: false
})
export const signupFormReset = (state, { data }) => state.merge({ isRequest: false, errors: [], status: 0 })
export const signupFormSubmit = (state, { data }) => state.merge({ isRequest: true, errors: [], status: 0 })
export const signupFormSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_FORM_RESET]: signupFormReset,
  [Types.SIGNUP_FORM_SUBMIT]: signupFormSubmit,
  [Types.SIGNUP_FORM_SUBMIT_DONE]: signupFormSubmitDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
