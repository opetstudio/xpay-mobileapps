
import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native'
import AppConfig from '../../config/AppConfig'
import { isLoggedIn, getAllSession } from '../../lib/Utils'
import { connect } from 'react-redux'
import { path } from 'ramda'
import SessionAction, { SessionSelectors } from '../../redux/SessionRedux'

class ScreenAuthLoading extends React.Component {
  constructor (props) {
    super(props)
    this._bootstrapAsync = this._bootstrapAsync.bind(this)
  }

  componentDidMount () {
    console.log('componentDidMount=')
    this._bootstrapAsync()
  }

  componentDidUpdate (prevProps) {
    console.log('ScreenAuthLoadingcomponentDidUpdate prevProps=', prevProps)
    console.log('ScreenAuthLoadingcomponentDidUpdate this.props=', this.props)
  }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const currentSessionJson = await getAllSession()
      const isLogin = path([AppConfig.loginFlag], currentSessionJson)
      const userId = path(['userId'], currentSessionJson)

      // const isLogin = await isLoggedIn(this.props.sessionToken)
      console.log('_bootstrapAsync isLogin=>>>>>>>', isLogin)
      console.log('_bootstrapAsync this.props.isLoggedIn=>>>>>>>', this.props.isLoggedIn)
      if (isLogin && !this.props.isLoggedIn) {
        this.props.sessionPatch({ isLoggedIn: true, userId })
      }
      if (!isLogin && this.props.isLoggedIn) {
        this.props.sessionPatch({ isLoggedIn: false })
      }
      this.props.navigation.navigate(isLogin ? 'loggedinNavigator' : 'unloggedinNavigator')
    };

    // Render any loading content that you like here
    render () {
      console.log('ScreenAuthLoading render this.props=', this.props)
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle='default' />
        </View>
      )
    }
}

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: SessionSelectors.isLoggedIn(state.session),
  sessionToken: SessionSelectors.sessionToken(state.session)
})
const mapDispatchToProps = dispatch => ({
  sessionPatch: data => dispatch(SessionAction.sessionPatch(data))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => <ScreenAuthLoading {...props} />)
