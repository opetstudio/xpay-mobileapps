import React, { Component } from 'react'
import { Root } from 'native-base'
import { connect } from 'react-redux'
// import SplashScreen from 'react-native-splash-screen'

import ReduxNavigation from '../navigation/ReduxNavigation'
import StartupActions from '../redux/StartupRedux'
// import WebsocketActions from './redux/WebsocketRedux'
import ReduxPersist from '../config/ReduxPersist'
import { SessionSelectors } from '../redux/SessionRedux'

// component
// import StyledView from '../components/StyledView'
// import StyledStatusBar from './StyledStatusBar'

// import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
// import { Metrics } from '../themes'

// Styles
// import { Colors } from '../themes'

// import PopupActions, { PopupSelectors } from './redux/PopupRedux'
import AppActions, { AppSelectors } from '../redux/AppRedux'
// import metrics from '../themes/Metrics'

class RootContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // SplashScreen.hide()
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    // this.props.websocketSetup({ timestamp: new Date() })
    this.props.appPatch({ loading: false })
  }

  render () {
    const navigator = (<ReduxNavigation />)
    return (
      <Root>
        {/* <StyledView style={{ paddingHorizontal: 0 }} isLoading={this.props.loading}> */}
        {/* <Dialog
          message={this.props.message}
          isOpen={this.props.isOpen}
          hidePopup={this.props.hidePopup}
        /> */}
        {/* {isIphoneX ? (
          <SafeArea navigator={navigator} />
        ) : (
          navigator
        )} */}
        {navigator}
        {/* </StyledView> */}
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.login
    // message: PopupSelectors.getPopupMessage(state.popup),
    // isOpen: PopupSelectors.getPopupOpen(state.popup),
    loading: AppSelectors.loading(state.app),
    appState: 'active',
    appUpdate: false,
    isLoggedIn: SessionSelectors.isLoggedIn(state.session)
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  // websocketSetup: (action) => dispatch(WebsocketActions.websocketSetup(action)),
  // hidePopup: () => dispatch(PopupActions.popupHide()),
  appPatch: data => dispatch(AppActions.appPatch(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
