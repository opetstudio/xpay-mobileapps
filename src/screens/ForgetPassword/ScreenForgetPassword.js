import React, { Component } from 'react'
import { View, ImageBackground, StatusBar } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Title, Right, Content } from 'native-base'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../themes'
import ForgetPassword from '../../containers/ForgetPassword'

export default class ScreenForgetPassword extends Component {
  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
          <Header style={{backgroundColor: 'rgba(218,55,49,1)'}}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Forget Password</Title>
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
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <ForgetPassword navigation={this.props.navigation}/>
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}
