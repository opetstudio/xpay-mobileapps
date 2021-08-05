import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text } from 'native-base'
export default class ScreenSuccessBind extends Component {
  render () {
    return (
      <Container style={{}}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Success Bind</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>

          <Icon
            style={{ fontSize: 200, color: 'green' }}
            type='Ionicons'
            name='md-checkmark-circle-outline'
          />
          <Text style={{ margin: 10, fontSize: 24 }}>Success Bind Card</Text>
          <Button onPress={() => this.props.navigation.replace('DrawerMenuNavigator')}><Text>OK</Text></Button>
        </Content>
      </Container>
    )
  }
}
