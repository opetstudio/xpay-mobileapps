import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  scanqrSubmitPayment: ['data'],
  scanqrSubmitPaymentDone: ['data'],
  scanqrResetForm: null,
  scanqrSetData: ['data'],
  reset: null
})

export const ScanqrTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  version: 0,
  isRequest: false,
  responseCode: '',
  errorMessage: '',
  transactionId: '',
  billingId: '',
  merchantId: '',
  merchantName: '',
  amount: 0,
  errors: [],
  status: 0
})
export const ScanqrSelectors = {
  getVersion: st => st.version,
  getIsRequest: st => st.isRequest,
  getResponseCode: st => st.responseCode,
  getErrorMessage: st => st.errorMessage
}
export const scanqrSetData = (state, { data }) => state.merge({ ...data })
export const scanqrSubmitPayment = (state, { data }) => state.merge({ isRequest: true, errors: [] })
export const scanqrSubmitPaymentDone = (state, { data }) => state.merge({ isRequest: false, ...data })
export const scanqrResetForm = (state, { data }) => state.merge({ isRequest: false, errors: [], status: 0 })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SCANQR_SET_DATA]: scanqrSetData,
  [Types.SCANQR_RESET_FORM]: scanqrResetForm,
  [Types.SCANQR_SUBMIT_PAYMENT]: scanqrSubmitPayment,
  [Types.SCANQR_SUBMIT_PAYMENT_DONE]: scanqrSubmitPaymentDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
