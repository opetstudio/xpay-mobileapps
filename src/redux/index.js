import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'
import ReduxPersist from '../config/ReduxPersist'
import { navReducer } from './NavigationRedux'

export const reducers = combineReducers({
  emoney: require('../features/emoney/redux').reducer,
  // nav: require('./NavigationRedux').reducer,
  session: require('./SessionRedux').reducer,
  websocket: require('./WebsocketRedux').reducer,
  app: require('./AppRedux').reducer,
  popup: require('./PopupRedux').reducer,
  addcard: require('../screens/AddCard/redux').reducer,
  otp: require('../containers/Otp/redux').reducer,
  signup: require('../containers/Signup/redux').reducer,
  footer: require('../containers/Footer/redux').reducer,
  userprofile: require('../containers/UserProfile/redux').reducer,
  changeusername: require('../containers/ChangeUsername/redux').reducer,
  changeemail: require('../containers/ChangeEmail/redux').reducer,
  otpchangeemail: require('../containers/OtpChangeEmail/redux').reducer,
  changepassword: require('../containers/ChangePassword/redux').reducer,
  scanqr: require('../containers/Scanqr/redux').reducer,
  paymentconfirmationform: require('../containers/PaymentConfirmationForm/redux').reducer,
  paymentreceipt: require('../containers/PaymentReceipt/redux').reducer,
  paymenttransactiondetail: require('../containers/PaymentTransactionDetail/redux').reducer,
  transactionHistory: require('../containers/TransactionList/redux').reducer,
  forgetpassword: require('../containers/ForgetPassword/redux').reducer,
  confirmforgetpassword: require('../containers/ConfirmForgetPassword/redux').reducer,
  listallmerchant: require('../containers/ListMerchant/redux').reducer,
  scanqrTopupMerchant: require('../containers/ScanqrTopupMerchant/redux').reducer,
  topupconfirmationform: require('../containers/TopupConfirmationForm/redux').reducer,
  scanqrDynamic: require('../containers/ScanqrDynamic/redux').reducer,
  paymentconfirmationformdynamic: require('../containers/PaymentConfirmationFormDynamic/redux').reducer,

  nav: navReducer
})
export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }
  return store
}
