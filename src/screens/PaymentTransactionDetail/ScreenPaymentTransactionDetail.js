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
import { ImageBackground, View,StatusBar } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'
import Footer from '../../containers/Footer'
import { Images, Metrics, Colors } from '../../themes'
import PaymentTransactionDetail from '../../containers/PaymentTransactionDetail'

const styles = {
  
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  }
}
class ScreenPaymentTransactionDetail extends Component {
  render () {
    return (
      <Container style={styles.container}>
         <Header style={{ backgroundcolor: '#fff' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Detail Transaksi</Title>
          </Body>
          <Right />
        </Header>
        {Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor='rgba(218,55,49,1)' />}
        {Platform.OS === 'ios' &&
          <StyledStatusBar
            translucent
            backgroundColor='rgba(218,55,49,1)'
            barStyle='light-content'
            StatusBarAnimation='fade'
          />}
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <PaymentTransactionDetail
              navigation={this.props.navigation}
            />
          </Content>
      </Container>
    )
  }
}

export default ScreenPaymentTransactionDetail
