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
  Icon,
  Form,
  Item,
  Label,
  Input
} from 'native-base'
import { ImageBackground, View } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'
import Footer from '../../containers/Footer'
import { Images, Metrics, Colors } from '../../themes'
import FormOtpvalidation from '../../containers/Otp/FormOtpvalidation'

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  }
}
class ScreenOtpValidation extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <ImageBackground source={Images.backgroundXpay} style={styles.backgroundImg}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Otp Validation</Title>
            </Body>
            <Right />
          </Header>
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <FormOtpvalidation
              navigation={this.props.navigation}
            />
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

export default ScreenOtpValidation
