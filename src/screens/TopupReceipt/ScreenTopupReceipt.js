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
import PaymentReceipt from '../../containers/TopupReceipt'
import { path } from 'ramda'

const styles = {
  container: {
    // backgroundColor: '#5cf788',
    backgroundColor: 'rgba(218,55,49,1)', 
  },
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  }
}
class ScreenTopupReceipt extends Component {
  render () {
    const { navigation } = this.props
    const { transactionId } = path(['state', 'params'], navigation) || {}
    return (
      <Container style={styles.container}>
        <Icon type="Feather" name="x" color="white" style={{marginLeft:20,marginTop:20,color:'white'}} onPress={()=>{this.props.navigation.navigate('ScreenHome')}}></Icon>
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <PaymentReceipt 
              navigation={this.props.navigation}
              transactionId={transactionId}
            />
          </Content>
      </Container>
    )
  }
}

export default ScreenTopupReceipt
