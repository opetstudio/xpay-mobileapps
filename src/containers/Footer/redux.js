import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  reset: null,
  setHome: ['data'],
  setHistory: ['data'],
  setPay: ['data'],
  setMe: ['data'],
  setMerchant: ['data'],
  footerSetActiveScreen: ['data']
})

export const FooterTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
    version: 0,
    home: false,
    history: false,
    pay: false,
    me: false,
    activeScreen: ''
})

export const FooterSelectors = {
  version: st => st.version,
  home: st => st.home,
  history: st => st.history,
  pay: st => st.pay,
  merchant: st => st.pay,
  me: st => st.me,
}
export const setHome = (state, { data }) => state.merge({ home: data })
export const setHistory = (state, { data }) => state.merge({ history: data })
export const setPay = (state, { data }) => state.merge({ pay: data })
export const setMe = (state, { data }) => state.merge({ me: data })
export const setMerchant = (state, { data }) => state.merge({ merchant: data })
export const footerSetActiveScreen = (state, { data }) => state.merge({ activeScreen: data })

//export const footerFormSubmit = (state, { data }) => {
  //data.footerFormSubmitMSG = { ir: true, rc: '', rs: '', rd: '' }
  //return footerPatch(state, { data })
//}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_MERCHANT]: setMerchant,
  [Types.FOOTER_SET_ACTIVE_SCREEN]: footerSetActiveScreen,
  [Types.SET_HOME]: setHome,
  [Types.SET_HISTORY]: setHistory,
  [Types.SET_PAY]: setPay,
  [Types.SET_ME]: setMe,
  [Types.RESET]: (state) => INITIAL_STATE
})
