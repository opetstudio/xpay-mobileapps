import React, { Component, Fragment } from 'react'
// import QRCodeScanner from 'react-native-qrcode-scanner'
// import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions'
import styles from './scanStyle'
import {
  TouchableOpacity,
  StatusBar,
  Linking,
  View,
  ImageBackground,
  Platform,
  Alert
} from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Title,
  Body,
  Right,
  Text,
  Icon,
  Form,
  Item,
  Label,
  Input
} from 'native-base'
// import I18n from '../../I18n'

// import {
//   // Header,
//   // Colors
// } from 'react-native/Libraries/NewAppScreen'
import Scanqr from '../../containers/Scanqr'
class ScreenScanQr extends Component {
  render () {
    return (
      <Container>
        <Header style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Scan QR Code</Title>
          </Body>
          <Right />
        </Header>
        {Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor='rgba(195,40,34,1)' />}
        {/* {Platform.OS === 'ios' &&
          <StyledStatusBar
            translucent
            backgroundColor='rgba(195,40,34,1)'
            barStyle='light-content'
            StatusBarAnimation='fade'
          />} */}
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          {/* <Scanqr /> */}
        </Content>
      </Container>

    )
  }
}

export default ScreenScanQr
