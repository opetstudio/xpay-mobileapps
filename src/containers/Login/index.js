
import React from 'react'
// import { View, StyleSheet, Alert, ImageBackground, Image } from 'react-native'
// import { Button, Text, Container, Form, Input, Item, Content, Spinner } from 'native-base'
// import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
// import { Images, Colors, Metrics } from '../../themes'
import { isLoggedIn } from '../../lib/Utils'
import SessionAction, { SessionSelectors } from '../../redux/SessionRedux'
import LoginForm from '../../components/Login'

class ScreenLogin extends React.Component {
  componentDidMount () {
    const { sessionLoginResetForm } = this.props
    sessionLoginResetForm()
  }

  async componentDidUpdate (prevProps) {
    if (this.props.isLoggedIn !== null && !_.isEqual(prevProps.isLoggedIn, this.props.isLoggedIn)) {
      const isLogin = await isLoggedIn()
      console.log('isLogin=', isLogin)
      if (this.props.isLoggedIn) this.props.navigation.navigate('loggedinNavigator')
    }
  }

  handlingOnSubmit ({ userid, password }) {
    const { loginRequest } = this.props
    loginRequest({ userid, password: password })
  }

  render () {
    // console.log('logiiiinnnnnn.', this.props)
    const { errors, isRequest } = this.props
    return (
      <LoginForm
        errors={errors}
        isRequest={isRequest}
        onSubmit={this.handlingOnSubmit.bind(this)}
      />
    )
  }
}

// REDUX CONNECTION
export default connect(
  (state, ownProps) => ({
    isRequest: state.session.isRequest,
    errors: state.session.errors,
    isLoggedIn: SessionSelectors.isLoggedIn(state.session),
    sessionToken: SessionSelectors.sessionToken(state.session),
    sessionLoginMSG: SessionSelectors.sessionLoginMSG(state.session)
  }),
  dispatch => ({
    loginRequest: data => dispatch(SessionAction.sessionLogin(data)),
    sessionLoginResetForm: data => dispatch(SessionAction.sessionLoginResetForm())
  })
)(withNavigation(ScreenLogin))
