import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  resetGetDetailPayment: null,
  getDetailPayment: ['data'],
  getDetailPaymentDone: ['data'],
  reset: null
})

export const PaymentTransactionDetailTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  transaction_amount:'',
  transaction_id:'',
  merchant_username:'',
  merchant_id:'',
  status_trx:{},
  updated_at:'',
  transaction_method:'',
  status: 0,
  errors: []
})

export const resetGetDetailPayment = (state) => state.merge({ isRequest: false, status: 0, errors: [] })
export const getDetailPayment = (state, { data }) => state.merge({ isRequest: true })
export const getDetailPaymentDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_GET_DETAIL_PAYMENT]: resetGetDetailPayment,
  [Types.GET_DETAIL_PAYMENT]: getDetailPayment,
  [Types.GET_DETAIL_PAYMENT_DONE]: getDetailPaymentDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
