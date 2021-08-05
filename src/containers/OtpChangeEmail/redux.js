import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  otpchangeemailSubmit: ['data'],
  otpchangeemailSubmitDone: ['data'],
  reset: null
})

export const OtpchangeemailTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  status: 0,
  errors: []
})

export const otpchangeemailSubmit = (state, { data }) => state.merge({ isRequest: true })
export const otpchangeemailSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OTPCHANGEEMAIL_SUBMIT]: otpchangeemailSubmit,
  [Types.OTPCHANGEEMAIL_SUBMIT_DONE]: otpchangeemailSubmitDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
