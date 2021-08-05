import React, { Component } from 'react'
import { ImageBackground, View, StatusBar, Platform } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Title, Right, Content } from 'native-base'
import StyledStatusBar from '../../containers/StyledStatusBar'
import OtpChangeEmailContainer from '../../containers/OtpChangeEmail'
export default class ScreenOtpChangeEmail extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header style={{  backgroundColor: 'rgba(218,55,49,1)' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Masukkan OTP</Title>
          </Body>
          <Right />
        </Header>
        {Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor='rgba(195,40,34,1)' />}
        {Platform.OS === 'ios' &&
          <StyledStatusBar
            translucent
            backgroundColor='rgba(195,40,34,1)'
            barStyle='light-content'
            StatusBarAnimation='fade'
          />}
        <Content>
          <OtpChangeEmailContainer navigation={this.props.navigation} />
        </Content>
      </Container>
    )
  }
}
