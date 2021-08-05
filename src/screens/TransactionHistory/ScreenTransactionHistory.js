import React, { Component } from 'react'
import { StatusBar, Platform } from 'react-native'
import {
  Container,
  Content,
  Header,
  // Left,
  // Button,
  Icon,
  Body,
  Title,
  Right
} from 'native-base'
import StyledStatusBar from '../../containers/StyledStatusBar'
// import TransactionHistory from '../../containers/TransactionList'
import Footer from '../../containers/Footer'

export default class ScreenTransactionHistory extends Component {
  render () {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
          <Body>
            <Title>Transaction History</Title>
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
          {/* <TransactionHistory navigation={this.props.navigation} /> */}
        </Content>
        <Footer tabName='history' />
      </Container>
    )
  }
}



