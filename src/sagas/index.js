import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'
import FixtureAPI from '../services/FixtureApi'
import DebugConfig from '../config/DebugConfig'
import AppConfig from '../config/AppConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/StartupRedux'
import { WebsocketTypes } from '../redux/WebsocketRedux'
import { SessionTypes } from '../redux/SessionRedux'
import { AddcardTypes } from '../screens/AddCard/redux'
import { OtpvalidationTypes } from '../containers/Otp/redux'
import { SignupTypes } from '../containers/Signup/redux'
import { UserprofileTypes } from '../containers/UserProfile/redux'
import { ScanqrTypes } from '../containers/Scanqr/redux'
import { PaymentConfirmationFormSubmitTypes } from '../containers/PaymentConfirmationForm/redux'
import { ChangeemailTypes } from '../containers/ChangeEmail/redux'
import { ChangepasswordTypes } from '../containers/ChangePassword/redux'
import { ChangeusernameTypes } from '../containers/ChangeUsername/redux'
import { OtpchangeemailTypes } from '../containers/OtpChangeEmail/redux'
import { TrancationHistoryTypes } from '../containers/TransactionList/redux'
import { PaymentReceiptTypes } from '../containers/PaymentReceipt/redux'
import { PaymentTransactionDetailTypes } from '../containers/PaymentTransactionDetail/redux'
import { ForgetPasswordTypes } from '../containers/ForgetPassword/redux'
import { ConfirmForgetPasswordTypes } from '../containers/ConfirmForgetPassword/redux'
import { ListMerchantTypes } from '../containers/ListMerchant/redux'
import { ScanqrTopupMerchantTypes } from '../containers/ScanqrTopupMerchant/redux'
import { TopupConfirmationFormSubmitTypes } from '../containers/TopupConfirmationForm/redux'
import { ScanqrDynamicTypes } from '../containers/ScanqrDynamic/redux'
import { PaymentConfirmationFormDynamicSubmitTypes } from '../containers/PaymentConfirmationFormDynamic/redux'
/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { websocketSetup } from './WebsocketSagas'
import { sessionLogin, sessionLogout } from './SessionSagas'
import { addcardFormSubmit } from '../screens/AddCard/sagas'
import { otpvalidationFormSubmit } from '../containers/Otp/sagas'
import { signupFormSubmit } from '../containers/Signup/sagas'
import { userprofileFetchUserProfileById, userprofileEditProfile } from '../containers/UserProfile/sagas'
import { scanqrSubmitPayment } from '../containers/Scanqr/sagas'
import { paymentConfirmationFormSubmit } from '../containers/PaymentConfirmationForm/sagas'
import { changeemailSubmit } from '../containers/ChangeEmail/sagas'
import { changepasswordSubmit } from '../containers/ChangePassword/sagas'
import { changeusernameSubmit } from '../containers/ChangeUsername/sagas'
import { otpchangeemailSubmit } from '../containers/OtpChangeEmail/sagas'
import { transactionHistory } from '../containers/TransactionList/sagas'
import { getPaymentReceiptResponse } from '../containers/PaymentReceipt/sagas'
import { getDetailPayment } from '../containers/PaymentTransactionDetail/sagas'
import { forgetPasswordFormSubmit} from '../containers/ForgetPassword/sagas'
import { confirmForgetPasswordFormSubmit} from '../containers/ConfirmForgetPassword/sagas'
import { fetchAllRpMerchant } from '../containers/ListMerchant/sagas'
import { scanqrSubmitTopupMerchant } from '../containers/ScanqrTopupMerchant/sagas'
import { topupConfirmationFormSubmit } from '../containers/TopupConfirmationForm/sagas'
import { scanqrSubmitPaymentDynamic } from '../containers/ScanqrDynamic/sagas'
import { paymentConfirmationFormDynamicSubmit } from '../containers/PaymentConfirmationFormDynamic/sagas'
/* ------------- API ------------- */

import { EmoneyTypes } from '../features/emoney/redux'
import { emoneyFetchOneByuserid } from '../features/emoney/sagas'

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
// const hostBackend = AppConfig.env === 'development' ? 'http://localhost:8762' : 'https://api.erevnaraya.com'
// const api = DebugConfig.useFixtures ? FixtureAPI : AppConfig.env === 'development' ? API.create('http://localhost:8080') : API.create('https://prismatech-6bbb8.uc.r.appspot.com')
const api = DebugConfig.useFixtures ? FixtureAPI : AppConfig.env === 'development' ? API.create(AppConfig.backendHost) : API.create('https://prismatech-6bbb8.uc.r.appspot.com')
// const api = DebugConfig.useFixtures ? FixtureAPI : AppConfig.env === 'development' ? API.create('http://10.0.2.2:3000') : API.create('https://rayapay-api.erevnaraya.co.id')
// const api = DebugConfig.useFixtures ? FixtureAPI : AppConfig.env === 'development' ? API.create('http://10.0.2.2:3000') : API.create('http://10.0.2.2:3000')
// const apiDashboard = DebugConfig.useFixtures ? FixtureAPI : API.create(AppConfig.backendHost + '/dashboard-api/')
// const apiDashboardPy = DebugConfig.useFixtures ? FixtureAPI : API.create(AppConfig.backendHost + '/dashboard-api/py/')
/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(EmoneyTypes.EMONEY_FETCH_ONE_BYUSERID, emoneyFetchOneByuserid, api),
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(WebsocketTypes.WEBSOCKET_SETUP, websocketSetup),
    takeLatest(SessionTypes.SESSION_LOGIN, sessionLogin, api),
    takeLatest(SessionTypes.SESSION_LOGOUT, sessionLogout, api),
    takeLatest(AddcardTypes.ADDCARD_FORM_SUBMIT, addcardFormSubmit, api),
    takeLatest(OtpvalidationTypes.OTPVALIDATION_FORM_SUBMIT, otpvalidationFormSubmit, api),
    takeLatest(SignupTypes.SIGNUP_FORM_SUBMIT, signupFormSubmit, api),
    takeLatest(ChangepasswordTypes.CHANGEPASSWORD_SUBMIT, changepasswordSubmit, api),
    takeLatest(ChangeusernameTypes.CHANGEUSERNAME_SUBMIT, changeusernameSubmit, api),
    takeLatest(UserprofileTypes.USERPROFILE_EDIT_PROFILE, userprofileEditProfile, api),
    takeLatest(UserprofileTypes.USERPROFILE_FETCH_USER_PROFILE_BY_ID, userprofileFetchUserProfileById, api),
    takeLatest(ChangeemailTypes.CHANGEEMAIL_SUBMIT, changeemailSubmit, api),
    takeLatest(OtpchangeemailTypes.OTPCHANGEEMAIL_SUBMIT, otpchangeemailSubmit, api),
    takeLatest(ScanqrTypes.SCANQR_SUBMIT_PAYMENT, scanqrSubmitPayment, api),
    takeLatest(PaymentConfirmationFormSubmitTypes.PAYMENT_CONFIRMATION_FORM_SUBMIT, paymentConfirmationFormSubmit, FixtureAPI),
    takeLatest(TrancationHistoryTypes.TRANSACTION_HISTORY, transactionHistory, api),
    takeLatest(PaymentReceiptTypes.GET_RECEIPT, getPaymentReceiptResponse, api),
    takeLatest(PaymentConfirmationFormSubmitTypes.PAYMENT_CONFIRMATION_FORM_SUBMIT, paymentConfirmationFormSubmit, api),
    takeLatest(PaymentTransactionDetailTypes.GET_DETAIL_PAYMENT, getDetailPayment, api),
    takeLatest(ForgetPasswordTypes.FORGET_PASSWORD_FORM_SUBMIT, forgetPasswordFormSubmit, api),
    takeLatest(ConfirmForgetPasswordTypes.CONFIRM_FORGET_PASSWORD_FORM_SUBMIT, confirmForgetPasswordFormSubmit, api),
    takeLatest(ListMerchantTypes.FETCH_ALL_MERCHANT, fetchAllRpMerchant, api),
    takeLatest(ScanqrTopupMerchantTypes.SCANQR_SUBMIT_TOPUP_MERCHANT, scanqrSubmitTopupMerchant, api),
    takeLatest(TopupConfirmationFormSubmitTypes.TOPUP_CONFIRMATION_FORM_SUBMIT, topupConfirmationFormSubmit, api),
    takeLatest(ScanqrDynamicTypes.SCANQR_SUBMIT_PAYMENT_DYNAMIC, scanqrSubmitPaymentDynamic, api),
    takeLatest(PaymentConfirmationFormDynamicSubmitTypes.PAYMENT_CONFIRMATION_FORM_DYNAMIC_SUBMIT, paymentConfirmationFormDynamicSubmit, api),

  ])
}
