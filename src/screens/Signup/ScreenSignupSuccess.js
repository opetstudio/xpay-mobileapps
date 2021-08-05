import React, { Component } from 'react'
import { View, ImageBackground, StatusBar } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Title, Right, Content } from 'native-base'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../themes'

export default class ScreenSingup extends Component {
  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
          <Header style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Signup</Title>
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
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
              <Icon
                style={{ fontSize: 200, color: 'green' }}
                type='Ionicons'
                name='md-checkmark-circle-outline'
              />
              <Text style={{ margin: 10, textAlign: 'center' }}>Signup Berhasil. Username dan Password random telah dikirim ke alamat email anda. Silahkan login dan update dengan yang baru.</Text>
              <Button block style={{ margin: 15,backgroundColor: 'rgba(218,55,49,1)'}} onPress={() => this.props.navigation.replace('ScreenLogin')}><Text>OK</Text></Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}
