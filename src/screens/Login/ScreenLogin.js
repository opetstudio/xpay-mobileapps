
import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { Container, Content } from 'native-base'
// import PropTypes from 'prop-types'
// import _ from 'lodash'
// import { connect } from 'react-redux'
import { Images, Metrics } from '../../themes'
// import { isLoggedIn, isEmptyOrNull } from '../../lib/Utils'
// import SessionAction, { SessionSelectors } from '../../redux/SessionRedux'
import LoginForm from '../../containers/Login'

export default function ScreenLogin (props) {
  // static propTypes = {
  //   loginRequest: PropTypes.func,
  //   sessionToken: PropTypes.string,
  //   isLoggedIn: PropTypes.bool
  // }

  // static defaultProps = {
  //   loginRequest: () => {}
  //   // sessionToken: null
  // }

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     userid: '',
  //     password: '',
  //     sessionToken: this.props.sessionToken
  //   }
  //   this._doLogin = this._doLogin.bind(this)
  // }

  // async componentDidUpdate (prevProps) {
  //   if (this.props.isLoggedIn !== null && !_.isEqual(prevProps.isLoggedIn, this.props.isLoggedIn)) {
  //     const isLogin = await isLoggedIn()
  //     console.log('isLogin=', isLogin)
  //     if (this.props.isLoggedIn) this.props.navigation.navigate('loggedinNavigator')
  //   }
  // }

  // _doLogin () {
  //   const username = this.state.userid
  //   const password = this.state.password

  //   if (username !== '' && password !== '') {
  //     this.props.loginRequest({ userid: username, password: password })
  //   } else {
  //     Alert.alert('invalid userid or password')
  //   }
  // }
  return (
    <Container>
      <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
        <Content>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Images.logo} style={{
                marginTop: Metrics.doubleSection,
                height: Metrics.images.logo,
                width: Metrics.images.logo,
                resizeMode: 'contain'

              }}
            />
          </View>
          <LoginForm />
        </Content>
      </ImageBackground>
    </Container>
  )
}

// // REDUX CONNECTION
// export default connect(
//   (state, ownProps) => ({
//     isLoggedIn: SessionSelectors.isLoggedIn(state.session),
//     sessionToken: SessionSelectors.sessionToken(state.session),
//     sessionLoginMSG: SessionSelectors.sessionLoginMSG(state.session)
//   }),
//   dispatch => ({
//     loginRequest: data => dispatch(SessionAction.sessionLogin(data))
//   })
// )(ScreenLogin)
