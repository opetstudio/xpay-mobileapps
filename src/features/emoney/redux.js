import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  emoneyFetchOneByuserid: ['data'],
  emoneyFetchOneByuseridDone: ['data'],
  reset: null
})

export const EmoneyTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  FetchOneByuserid: { loading: false }
})

export const emoneyFetchOneByuseridDone = (state, { data }) => state.merge({ FetchOneByuserid: { ...state.FetchOneByuserid, loading: false, ...data } })
export const emoneyFetchOneByuserid = (state, { data }) => state.merge({ FetchOneByuserid: { ...state.FetchOneByuserid, loading: true } })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMONEY_FETCH_ONE_BYUSERID]: emoneyFetchOneByuserid,
  [Types.EMONEY_FETCH_ONE_BYUSERID_DONE]: emoneyFetchOneByuseridDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
