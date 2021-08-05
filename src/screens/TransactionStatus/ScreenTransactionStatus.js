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
  List,
  ListItem
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Image, View } from 'react-native'
import { Images } from '../../themes'
import FormPinValidation from '../../containers/Pin/FormPinValidation'

const productList = [
  { qty: 1, name: 'Begin Action Figure 01', price: 112500000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 1, name: 'Action Figure 01', price: 112500000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'Marchandise DP', price: 25000 },
  { qty: 10, name: 'End Marchandise DP', price: 25000 }
]
class ScreenTransactionConfirmation extends Component {
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
            <Title>Status</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{}} contentContainerStyle={{ margin: 10 }}>
          <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', padding: 10, marginTop: 10, marginBottom: 20, borderColor: '#000', borderWidth: 3, borderRadius: 20 }}>
            <Icon
              style={{ fontSize: 200, color: 'green', alignSelf: 'center' }}
              type='Ionicons'
              name='md-checkmark-circle-outline'
            />
            <Text style={{ margin: 10, fontSize: 24, textAlign: 'center' }}>Transaction Success</Text>
            <Text style={{ textAlign: 'center' }}>Total Amount: Rp 382.000</Text>
            <Button onPress={() => this.props.navigation.replace('DrawerMenuNavigator')} style={{ margin: 10 }}><Text>OK</Text></Button>
          </View>
          <Text style={{ alignSelf: 'center', margin: 5 }}>Transaction Detail</Text>
          <View style={{ backgroundColor: 'white' }}>
            <List
              contentContainerStyle={{ backgroundColor: '#e8eaeb', padding: 10, minHeight: 300 }}
              dataArray={productList}
              nestedScrollEnabled={false}
              renderRow={data =>
                <ListItem noIndent style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
                  <Grid>
                    <Col size={1}>
                      <Text style={{ color: '#000' }}>
                        {data.qty}
                      </Text>
                    </Col>
                    <Col size={2}>
                      <Text style={{ color: '#000' }}>
                        {data.price}
                      </Text>
                    </Col>
                    <Col size={4}>
                      <Text style={{ color: '#000' }}>
                        {data.name}
                      </Text>
                    </Col>
                  </Grid>
                  {/* <Left style={{backgroundColor: 'blue'}}>
                        <Text style={{ color: '#000' }}>
                            {data.name}
                        </Text>
                        </Left>
                        <Right style={{backgroundColor: 'blue'}}>
                        <Text style={{ color: '#000' }}>
                            {data.qty} x {data.price}
                        </Text>
                        </Right> */}
                </ListItem>}
            />
          </View>
          <Text style={{ alignSelf: 'center', margin: 15 }}>==== Thank You ====</Text>
        </Content>
      </Container>
    )
  }
}

export default ScreenTransactionConfirmation
