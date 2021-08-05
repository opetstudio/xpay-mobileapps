import React, { Component } from 'react'
import { ImageBackground, View, StatusBar, Platform } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Title, Right, Content } from 'native-base'
import StyledStatusBar from '../../containers/StyledStatusBar'
import Footer from '../../containers/Footer'
import ListMerchant from '../../containers/ListMerchant'
export default class ScreenListMerchant extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Container style={{ backgroundColor: 'white', overflow: 'visible' }}>
        <Header style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
          <Body>
            <Title>Deals</Title>
          </Body>
          <Right />
          <Icon name='notifications' type='Ionicons' style={{ color: 'white', marginTop: 15 }} />
        </Header>
        {Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor='rgba(218,55,49,1)' />}
        {/* {Platform.OS === 'ios' &&
          <StyledStatusBar
            translucent
            backgroundColor='rgba(218,55,49,1)'
            barStyle='light-content'
            StatusBarAnimation='fade'
          />} */}
        <Content>
          <ListMerchant navigation={this.props.navigation} />
        </Content>
        <Footer tabName='merchants' />
      </Container>
    )
  }
}
