import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  Button,
  Footer,
  FooterTab,
  Text,
  Icon
} from 'native-base'
import { withNavigation } from 'react-navigation'
import _ from 'lodash'
import { Image, View } from 'react-native'
// import { isIphoneX } from '../../lib/helper/platform'
import { Images } from '../../themes'
import { styles } from './styles'

class FooterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      home: false,
      history: false,
      pay: false,
      me: false,
      merchant: false
    }
  }

  componentDidMount () {
    this.toggleTab(this.props.initialTab)
    if (!this.props.isLoggedIn) this.props.navigation.navigate('unloggedinNavigator')
  }

  componentDidUpdate (prevProps) {
    if (this.props.isLoggedIn !== null && !_.isEqual(prevProps.isLoggedIn, this.props.isLoggedIn)) {
      if (!this.props.isLoggedIn) this.props.navigation.navigate('unloggedinNavigator')
    }
  }

  toggleTab (menu) {
    const state = {
      home: menu === 'home',
      history: menu === 'history',
      pay: menu === 'pay',
      me: menu === 'me',
      merchant: menu === 'merchant'
    }
    this.setState(state)
  }

  render () {
    console.log('renderrrrrrfoooter=', this.props)
    const { routeName } = this.props
    return (
      <Footer style={{ height: 60 }}>
        <FooterTab style={[styles.footerAndro]}>
          <Button
            active={routeName === 'ScreenHome'}
            style={{ backgroundColor: routeName === 'ScreenHome' ? 'rgba(255,255,255,0)' : null }}
            onPress={() => {
              this.props.navigation.navigate('ScreenHome')
            }}
          >
            <Icon type='AntDesign' active={this.state.home} name='home' style={{ fontSize: 30, color: routeName === 'ScreenHome' ? 'rgba(218,55,49,1)' : 'black' }} />
            <Text style={{ fontSize: 10, color: routeName === 'ScreenHome' ? 'rgba(218,55,49,1)' : 'black' }}>Home</Text>
          </Button>
          <Button
            active={routeName === 'ScreenListMerchant'}
            style={{ backgroundColor: routeName === 'ScreenListMerchant' ? 'rgba(255,255,255,0)' : null }}
            onPress={() => {
              this.props.navigation.navigate('ScreenListMerchant')
            }}
          >
            {/* <Icon type='MaterialIcons' active={this.state.history} name='store' style={{ fontSize: 30, color: 'rgba(218,55,49,1)' }} /> */}
            {/* <Icon active={this.state.history} name='store' style={{ fontSize: 30, color: activeScreen === 'merchants' ? 'rgba(218,55,49,1)' : null }} /> */}
            <Icon type='MaterialIcons' active={this.state.history} name='store' style={{ fontSize: 30, color: routeName === 'ScreenListMerchant' ? 'rgba(218,55,49,1)' : 'black' }} />
            {/* <Icon type='AntDesign' active={this.state.history} name='home' style={{ fontSize: 30, color: activeScreen === 'merchants' ? 'rgba(218,55,49,1)' : null }} /> */}
            {/* <Icon type='AntDesign' active={this.state.history} name='store' style={{ fontSize: 30, color: activeScreen === 'home' ? 'rgba(218,55,49,1)' : null }} /> */}
            {/* <Icon type='AntDesign' active={this.state.home} name='home' style={{ fontSize: 30, color: activeScreen === 'home' ? 'rgba(218,55,49,1)' : null }} /> */}
            {/* <Text style={{ fontSize: 10, color: 'rgba(218,55,49,1)' }}>deals</Text> */}
            <Text style={{ fontSize: 10, color: routeName === 'ScreenListMerchant' ? 'rgba(218,55,49,1)' : 'black' }}>deals</Text>

          </Button>

          <View style={{ alignSelf: 'center', backgroundColor: '#f8f4f4', width: 63, height: 62, borderRadius: 35, bottom: 25, Index: 10 }}>
            <Button
              // active={routeName === 'ScreenScanQr'}
              onPress={() => this.props.navigation.navigate('ScreenScanQr')}
              style={{ background: Images.bgscanbtn, height: 60, width: 60, borderWidth: 3, borderColor: '#f8f4f4', borderRadius: 35, backgroundColor: '#d84943', overflow: 'hidden' }}
              active
            >
              <Image source={Images.bgscanbtn} style={{ resizeMode: 'stretch', width: '100%', height: '200%', marginBottom: 10 }} />
              <Image source={Images.scan} style={{ height: 55, resizeMode: 'contain', position: 'absolute' }} />

              {/* <Text>Pay</Text> */}
            </Button>
          </View>

          <Button
            active={routeName === 'ScreenTransactionHistory'}
            style={{ backgroundColor: routeName === 'ScreenTransactionHistory' ? 'rgba(255,255,255,0)' : null }}
            onPress={() => {
              this.props.navigation.navigate('ScreenTransactionHistory')
            }}
          >
            <Icon type='MaterialIcons' active={this.state.history} name='history' style={{ fontSize: 30, color: routeName === 'ScreenTransactionHistory' ? 'rgba(218,55,49,1)' : 'black' }} />
            <Text style={{ fontSize: 10, color: routeName === 'ScreenTransactionHistory' ? 'rgba(218,55,49,1)' : 'black' }}>History</Text>
          </Button>

          <Button
            active={routeName === 'ScreenMyProfile'}
            style={{ backgroundColor: routeName === 'ScreenMyProfile' ? 'rgba(255,255,255,0)' : null }}
            onPress={() => {
              this.props.navigation.navigate('ScreenMyProfile')
            }}
          >
            <Icon type='FontAwesome' active={this.state.me} name='user-circle' style={{ fontSize: 30, color: routeName === 'ScreenMyProfile' ? 'rgba(218,55,49,1)' : 'black' }} />
            <Text style={{ fontSize: 10, color: routeName === 'ScreenMyProfile' ? 'rgba(218,55,49,1)' : 'black' }}>Profile</Text>
          </Button>

        </FooterTab>
      </Footer>
    )
  }
}
export default withNavigation(FooterComponent)
