import React, { Component } from 'react'
import { ImageBackground, View, StatusBar, Platform } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Title, Right, Content } from 'native-base'
import StyledStatusBar from '../../containers/StyledStatusBar'
import Footer from '../../containers/Footer'
import UserProfile from '../../containers/UserProfile'
import UserProfileMenu from '../../containers/UserProfileMenu'
export default class ScreenMyProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Container style={{ backgroundColor: 'white', overflow: 'visible' }}>
        <Header style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
          <Body>
            <Title style={{ marginLeft: 0, color: 'black', fontSize: 24, fontWeight: 'bold' }}>Profile</Title>
          </Body>
          <Right />
          <Icon name='notifications' type='Ionicons' style={{ color: 'black', marginTop: 15 }} />
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
          <UserProfile />
          <UserProfileMenu navigation={this.props.navigation} />
        </Content>
        <Footer tabName='myprofile' />
      </Container>
    )
  }
}
