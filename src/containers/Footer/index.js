import { connect } from 'react-redux'
import { NavigationEvents } from 'react-navigation'
import Footer from '../../components/Footer'
import SessionAction from '../../redux/SessionRedux'
import FooterAction from './redux'
import _ from 'lodash'

import React, { Component } from 'react'

class index extends Component {
  handleOnWillFocus (payload) {
    const { footerSetActiveScreen, tabName } = this.props
    footerSetActiveScreen(tabName)
  }

  componentDidMount () {
    this.handleOnWillFocus({})
  }

  render () {
    console.log('renderrrr footer container', this.props)
    const { routeName, activeScreen, sessionLogout, isLoggedIn, sessionToken } = this.props
    return (
      <>
        <NavigationEvents onWillFocus={this.handleOnWillFocus.bind(this)} />
        <Footer
          routeName={routeName}
          activeScreen={activeScreen}
          sessionLogout={sessionLogout}
          isLoggedIn={isLoggedIn}
          sessionToken={sessionToken}
        />
      </>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  const level1index = state.nav.index
  const level1routes = state.nav.routes[level1index]
  const level2index = level1routes.index
  const level2routes = level1routes.routes[level2index]
  const level3index = level2routes.index
  const level3routes = level2routes.routes[level3index]
  return {
    routeName: level3routes.routeName,
    sessionToken: state.session.sessionToken,
    isLoggedIn: state.session.isLoggedIn,
    activeScreen: state.footer.activeScreen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sessionLogout: () => dispatch(SessionAction.sessionLogout()),
    footerSetActiveScreen: data => dispatch(FooterAction.footerSetActiveScreen(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)
