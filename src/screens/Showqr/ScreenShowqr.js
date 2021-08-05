import React, { Component } from 'react'
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
  Icon
} from 'native-base'
import { Image } from 'react-native'
import { Images } from '../../themes'

class ScreenShowqr extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>QR Code</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>Scan This QR Code</Text>
          <Image source={Images.qrcode} style={{ width: 200, height: 200 }} />
        </Content>
      </Container>
    )
  }
}

export default ScreenShowqr
