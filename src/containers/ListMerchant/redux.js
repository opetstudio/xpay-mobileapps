import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchAllMerchant: ['data'],
  fetchAllMerchantDone: ['data'],
  reset: null
})

export const ListMerchantTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  status: 0,
  errors: [],
  merchant_data:[]
})
export const fetchAllMerchant = (state, { data }) => state.merge({ isRequest: true })
export const fetchAllMerchantDone = (state, { data }) => state.merge({ isRequest: false, profilePicture: null, ...data })
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_ALL_MERCHANT]: fetchAllMerchant,
  [Types.FETCH_ALL_MERCHANT_DONE]: fetchAllMerchantDone, 
  [Types.RESET]: (state) => INITIAL_STATE
})
