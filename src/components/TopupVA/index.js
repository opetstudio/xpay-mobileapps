import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Text,
  Toast
} from 'native-base'
import { StyleSheet, View } from 'react-native'

export default class TopupVA extends Component {


  render () {
    
    return (
      <Form style={{ padding: 20 }}>
        <Text>No. Virtual Account : </Text>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input disabled placeholder='XXX-XXX-XXX-XXX' style={{ textAlign: 'center' }} />
        </Item>
        <Button rounded block style={{ margin: 15 }} >
          <Text>Copy</Text>
        </Button>
      </Form>
    )
  }
}
