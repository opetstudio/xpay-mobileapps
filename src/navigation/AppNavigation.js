
// import React from 'react'
// import { Root } from 'native-base'
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import {
  // createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import { createDrawerNavigator as DrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator as StackNavigator } from 'react-navigation-stack'

import navigatorHelper from '../lib/helper/navigator'
import { isIphoneX } from '../lib/helper/platform'

import ScreenLogin from '../screens/Login/ScreenLogin'
import ScreenOtpValidation from '../screens/OtpValidation/ScreenOtpValidation'
import ScreenAddCard from '../screens/AddCard/ScreenAddCard'
import ScreenHome from '../screens/Home/ScreenHome'
import ScreenSignup from '../screens/Signup/ScreenSignup'
import ScreenSignupSuccess from '../screens/Signup/ScreenSignupSuccess'
import ScreenShowqr from '../screens/Showqr/ScreenShowqr'
import ScreenScanQr from '../screens/ScanQr/ScreenScanQr'
import ScreenTransactionConfirmation from '../screens/TransactionConfirmation/ScreenTransactionConfirmation'
import ScreenAuthentication from '../screens/Authentication/ScreenAuthentication'
import ScreenTransactionStatus from '../screens/TransactionStatus/ScreenTransactionStatus'
import ScreenSuccessBind from '../screens/SuccessBind/ScreenSuccessBind'
import ScreenMyProfile from '../screens/MyProfile/ScreenMyProfile'
import ScreenEditUserProfile from '../screens/EditUserProfile/ScreenEditUserProfile'
import ScreenChangeEmail from '../screens/ChangeEmail/ScreenChangeEmail'
import ScreenChangePassword from '../screens/ChangePassword/ScreenChangePassword'
import ScreenChangeUsername from '../screens/ChangeUsername/ScreenChangeUsername'
import ScreenOtpChangeEmail from '../screens/OtpChangeEmail/ScreenOtpChangeEmail'
import ScreenTransactionHistory from '../screens/TransactionHistory/ScreenTransactionHistory'
import ScreenPaymentReceipt from '../screens/PaymentReceipt/ScreenPaymentReceipt'
import ScreenPaymentTransactionDetail from '../screens/PaymentTransactionDetail/ScreenPaymentTransactionDetail'
import ScreenListMerchant from '../screens/ListMerchant/ScreenListMerchant'
import ScreenForgetPassword from '../screens/ForgetPassword/ScreenForgetPassword'
import ScreenForgetPasswordSuccess from '../screens/ForgetPassword/ScreenForgetPasswordSuccess'
import ScreenConfirmForgetPassword from '../screens/ConfirmForgetPassword/ScreenConfirmForgetPassword'
import ScreenScanQrTopupMerchant from '../screens/ScanQrTopupMerchant/ScreenScanQrTopupMerchant'
import ScreenTopupVA from '../screens/TopupVA/ScreenTopupVA'
import ScreenTopupConfirmation from '../screens/TopupConfirmation/ScreenTopupConfirmation'
import ScreenTopupReceipt from '../screens/TopupReceipt/ScreenTopupReceipt'
import ScreenPrivacyPolicy from '../screens/PrivacyPolicy/ScreenPrivacyPolicy'
import ScreenBeliPulsa from '../screens/BeliPulsa/ScreenBeliPulsa'
import ScreenTransactionConfirmationDynamic from '../screens/TransactionConfirmationDynamic/ScreenTransactionConfirmationDynamic'
// import ScreenPrivacyPolicyAbout from '../screens/PrivacyPolicyAbout/ScreenPrivacyPolicyAbout'

import styles from './styles/NavigationStyles'

const menuRoutes = {
  ScreenHome: { screen: ScreenHome, navigationOptions: { drawerLabel: 'Home', drawerLockMode: 'locked-closed' } },
  ScreenMyProfile: { screen: ScreenMyProfile, navigationOptions: { drawerLabel: 'Me', drawerLockMode: 'locked-closed' } },
  ScreenListMerchant: { screen: ScreenListMerchant, navigationOptions: { drawerLabel: 'Merchant', drawerLockMode: 'locked-closed' } },
  ScreenTransactionHistory: { screen: ScreenTransactionHistory, navigationOptions: { drawerLabel: 'History', drawerLockMode: 'locked-closed' } }
}
navigatorHelper.setMenuNavigationRoutes(menuRoutes)
const DrawerMenuNavigator = DrawerNavigator(menuRoutes,
  {
    headerMode: 'none',
    initialRouteName: 'ScreenHome',
    navigationOptions: {
      headerStyle: styles.header
    }
    // contentOptions: {
    //   activeTintColor: '#e91e63'
    // }
    // contentComponent: props => <SideBar {...props} />
  }
)

export const loggedinNavigator = StackNavigator(
  {
    DrawerMenuNavigator: { screen: DrawerMenuNavigator },
    ScreenDashboard: { screen: ScreenHome },
    ScreenShowqr: { screen: ScreenShowqr },
    ScreenTransactionConfirmation: { screen: ScreenTransactionConfirmation },
    ScreenOtpValidation: { screen: ScreenOtpValidation },
    ScreenScanQr: { screen: ScreenScanQr },
    ScreenSuccessBind: { screen: ScreenSuccessBind },
    ScreenAddCard: { screen: ScreenAddCard },
    ScreenEditUserProfile: { screen: ScreenEditUserProfile },
    ScreenTransactionStatus: { screen: ScreenTransactionStatus },
    ScreenChangeEmail: { screen: ScreenChangeEmail },
    ScreenChangeUsername: { screen: ScreenChangeUsername },
    ScreenOtpChangeEmail: { screen: ScreenOtpChangeEmail },
    ScreenChangePassword: { screen: ScreenChangePassword },
    ScreenPaymentReceipt: { screen: ScreenPaymentReceipt },
    ScreenPaymentTransactionDetail: { screen: ScreenPaymentTransactionDetail },
    ScreenScanQrTopupMerchant: { screen: ScreenScanQrTopupMerchant },
    ScreenTopupVA: { screen: ScreenTopupVA },
    ScreenTopupConfirmation: { screen: ScreenTopupConfirmation },
    ScreenTopupReceipt: { screen: ScreenTopupReceipt },
    ScreenBeliPulsa: { screen: ScreenBeliPulsa },
    ScreenTransactionConfirmationDynamic: { screen: ScreenTransactionConfirmationDynamic }
    // ScreenPrivacyPolicyAbout: { screen: ScreenPrivacyPolicyAbout }
  },
  {
    headerMode: 'none',
    initialRouteName: 'DrawerMenuNavigator',
    navigationOptions: {
      headerStyle: styles.header,
      cardStyle: isIphoneX ? { shadowColor: 'transparent' } : {}
    }
  }
)
export const unloggedinNavigator = StackNavigator(
  {
    ScreenLogin: { screen: ScreenLogin },
    ScreenSignup: { screen: ScreenSignup },
    ScreenSignupSuccess: { screen: ScreenSignupSuccess },
    ScreenForgetPassword: { screen: ScreenForgetPassword },
    ScreenForgetPasswordSuccess: { screen: ScreenForgetPasswordSuccess },
    ScreenConfirmForgetPassword: { screen: ScreenConfirmForgetPassword },
    ScreenPrivacyPolicy: { screen: ScreenPrivacyPolicy }
  },
  {
    headerMode: 'none',
    initialRouteName: 'ScreenLogin',
    navigationOptions: {
      headerStyle: styles.header,
      cardStyle: isIphoneX ? { shadowColor: 'transparent' } : {}
    }
  }
)

export const SwitchNavigator = createSwitchNavigator({
  ScreenAuthentication,
  loggedinNavigator,
  unloggedinNavigator
}, { initialRouteName: 'ScreenAuthentication' })

// const AppContainer = createAppContainer(SwitchNavigator)

export default SwitchNavigator
