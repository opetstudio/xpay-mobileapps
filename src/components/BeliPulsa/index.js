import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {
  // Content,
  // Button,
  // Item,
  // Input,
  Form,
  Text,
  // Toast,
  // Card,
  CardItem,
  Left,
  Right,
  Icon
} from 'native-base'
import { StyleSheet, View, FlatList, Alert } from 'react-native'
export default class BeliPulsa extends Component {
  constructor (props) {
    super(props)
    this.state = {
      GridViewItems: [
        { key: '5.000' },
        { key: '10.000' },
        { key: '15.000' },
        { key: '20.000' },
        { key: '25.000' },
        { key: '30.000' },
        { key: '50.000' },
        { key: '100.000' },
        { key: '150.000' },
        { key: '200.000' },
        { key: '300.000' },
        { key: '500.000' }
      ]
    }
  }

  GetGridViewItem (item) {
    Alert.alert(item)
  }

  componentDidMount () {
    const { username, userId } = this.props
    this.setState({ username, userId })
  }

  handleOnPress () {
    const { onSubmit } = this.props
    const { username, password, userId } = this.state
    onSubmit({ username, password, userId })
  }

  render () {
    // const { username, password } = this.state
    // const { status, errors } = this.props
    return (
      <Form>
        <CardItem style={{ marginTop: 20, shadowColor: 'black', shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 2 }}>
          <Left>
            <Icon name='wallet' type='Entypo' style={{ color: 'red' }} />
            <Text style={{ textAlign: 'center' }}>E-Wallet</Text>
          </Left>
          <Text style={{ textAlign: 'center' }}>Rp 0</Text>
          <Right>
            <Text style={{ color: 'green', textAlign: 'center' }} onPress={() => { this.props.navigation.navigate('ScreenScanQrTopupMerchant') }}>TOP UP</Text>
          </Right>
        </CardItem>
        <CardItem style={{ height: 60, margin: 10, marginTop: 10, shadowColor: 'black', shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 2 }}>
          <Left>
            <Icon name='smartphone' type='MaterialIcons' style={{ color: 'red', alignSelf: 'center' }} />
            <Text style={{ textAlign: 'center' }}>+628964703253</Text>
          </Left>
          <Right><Icon name='contacts' type='MaterialCommunityIcons' style={{ color: 'red' }} /></Right>
        </CardItem>
        <CardItem style={{ backgroundColor: 'rgb(226, 231, 233)', margin: 10, marginTop: 0, shadowColor: 'black', shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 2 }}>
          <FlatList
            data={this.state.GridViewItems}
            renderItem={
              ({ item }) => (
                <View style={styles.GridViewBlockStyle}>
                  <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)}> {item.key} </Text>
                </View>)
            }
            numColumns={2}
          />
        </CardItem>
      </Form>
    )
  }
}
const styles = StyleSheet.create({

  GridViewBlockStyle: {

    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 70,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10

  },

  GridViewInsideTextItemStyle: {

    color: '#fff',
    padding: 10,
    fontSize: 15,
    justifyContent: 'center',
    color: 'black'

  }

})
