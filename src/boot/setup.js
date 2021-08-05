import React, { Component } from 'react'
import { StyleProvider, View } from 'native-base'
import { Provider } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import createStore from '../redux'

import App from './App'
import getTheme from '../native-base-theme/components'
import variables from '../native-base-theme/variables/commonColor'

const store = createStore()
export default class Setup extends Component {
    state = {
        loading: true
    }
  async componentDidMount () {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
      ...Ionicons.font
    })
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) {
        return (
          <View>
              {/*  */}
          </View>
        );
      }
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <App />
        </StyleProvider>
      </Provider>
    )
  }
}
