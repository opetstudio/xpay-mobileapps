import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import { Button, Icon, Card, CardItem, Thumbnail, Left, Body, Right, Spinner } from 'native-base'
import { isIphoneX } from '../../lib/helper/platform'
import { Images } from '../../themes'
import { ScrollView } from 'react-native-gesture-handler'
import { isEmptyOrNull } from '../../lib/Utils'
import _ from 'lodash'
import Moment from 'moment'

export default class LastTransaction extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSaldo: this.props.showSaldo
    }
  }

  convertAmount (a) {
    const amount = ('' + a).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    return amount
  }

  renderRow (row, i) {
    return (
      <Card key={i}>
        <CardItem style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
          <Left>
            <Body>
              <Text style={{ color: 'white' }}>{row.transaction_method}  :  IDR {this.convertAmount(row.transaction_amount)}</Text>
            </Body>
          </Left>
          <Right>
            <Body>
              <Text style={{ color: 'white' }}>{Moment(parseInt(row.created_at)).format('lll')}</Text>
            </Body>
          </Right>
        </CardItem>
      </Card>)
  }

  render () {
    console.log('isrequest==>', this.props.isRequest)
    const { history, nickname, firstName,isRequest } = this.props
    const name = !isEmptyOrNull(nickname) ? nickname : firstName
    return (
      <View style={{ marginHorizontal: 5 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', color: 'rgba(218,55,49,1)' }}>Hii, {name}</Text>
        <Text style={{ opacity: 0.6, fontSize: 20, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', color: 'rgba(218,55,49,1)' }}>These are your last 5 transactions</Text>
        <ScrollView>
          {isRequest && <Spinner color='red' />}
          {!_.isEmpty(history) && !isRequest &&!_.isEmpty(history) && history.map((r, i) => this.renderRow(r, i))}
          {(_.isEmpty(history) && !isRequest &&
            <Card>
              <CardItem style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
                <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 20 }}>You don't have transaction yet</Text>
              </CardItem>
            </Card>
          )}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txtIntro: {
    marginLeft: 10,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  }
})
