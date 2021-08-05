import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Title, Right, Content } from 'native-base'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../themes'

export default class ScreenForgetPasswordSuccess extends Component {
  render () {
    return (
      <Container>
        <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
              <Icon
                style={{ fontSize: 200, color: 'green' }}
                type='Ionicons'
                name='md-checkmark-circle-outline'
              />
              <Text style={{ margin: 10, textAlign: 'center' }}>Change password success</Text>
              <Button block style={{ margin: 15,backgroundColor: 'rgba(218,55,49,1)'}} onPress={() => this.props.navigation.replace('ScreenLogin')}><Text>OK</Text></Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}
