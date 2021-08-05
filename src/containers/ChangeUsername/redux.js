import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  changeusernameResetForm: null,
  changeusernameSubmit: ['data'],
  changeusernameSubmitDone: ['data'],
  reset: null
})

export const ChangeusernameTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  status: 0,
  errors: []
})

export const changeusernameResetForm = (state) => state.merge({ isRequest: false, status: 0, errors: [] })
export const changeusernameSubmit = (state, { data }) => state.merge({ isRequest: true })
export const changeusernameSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGEUSERNAME_RESET_FORM]: changeusernameResetForm,
  [Types.CHANGEUSERNAME_SUBMIT]: changeusernameSubmit,
  [Types.CHANGEUSERNAME_SUBMIT_DONE]: changeusernameSubmitDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
