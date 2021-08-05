import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  topupConfirmationResetForm: null,
  topupConfirmationFormSubmit: ['data'],
  topupConfirmationFormSubmitDone: ['data'],
  topupConfirmationFormSetData: ['data'],
  reset: null
})

export const TopupConfirmationFormSubmitTypes = Types
export default Creators
export const INITIAL_STATE = Immutable({ isRequest: false, status: 0, errors: [] })
export const topupConfirmationFormSetData = (state, { data }) => state.merge({ ...data })
export const topupConfirmationResetForm = (state, { data }) => state.merge({ isRequest: false, status: 0, errors: [] })
export const topupConfirmationFormSubmit = (state, { data }) => state.merge({ isRequest: true, status: 0, errors: [] })
export const topupConfirmationFormSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOPUP_CONFIRMATION_RESET_FORM]: topupConfirmationResetForm,
  [Types.TOPUP_CONFIRMATION_FORM_SET_DATA]: topupConfirmationFormSetData,
  [Types.TOPUP_CONFIRMATION_FORM_SUBMIT_DONE]: topupConfirmationFormSubmitDone,
  [Types.TOPUP_CONFIRMATION_FORM_SUBMIT]: topupConfirmationFormSubmit,
  [Types.RESET]: (state) => INITIAL_STATE
})
