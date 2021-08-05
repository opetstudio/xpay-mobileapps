import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  DatePicker,
  Spinner
} from 'native-base'
import _ from 'lodash'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    const { amount } = this.props
    this.setState({ amount })
  }

  handleOnChangeInputAmount (txt) {
    // const { onChangeInputAmount } = this.props
    // onChangeInputAmount(txt)
    this.setState({ amount: txt })
  }

  handleOnChangeInputPassword (txt) {
    // const { onChangeInputPassword } = this.props
    // onChangeInputPassword(txt)
    this.setState({ password: txt })
  }

  handleOnPressSubmitForm () {
    const { onPressSubmitForm } = this.props
    const { amount, password } = this.state
    onPressSubmitForm({ amount, password })
  }

  render () {
    const { merchantName, status, errors, isRequest, amount  } = this.props
    return (
      <Form style={[this.props.style]}>
        {/* {!_.isEmpty(errors) && errors.map((r, i) => <Text key={i} style={{ width: '100%', textAlign: 'center', marginTop: 30, color: 'red' }}>{r.message}</Text>)} */}
        {errors.map((r, i) => <Text key={i} style={{ width: '100%', textAlign: 'center', marginTop: 30, color: 'red' }}>{r.message}</Text>)}
        {isRequest && <Text style={{ width: '100%', textAlign: 'center', marginTop: 30 }}>Sedang mengirim data ke server, Mohon menunggu.</Text>}
        <Text style={{ alignSelf: 'center', marginBottom: 5 }}>Merchant Name: </Text>
        <Text style={{ alignSelf: 'center', marginBottom: 5 }}>{`${merchantName || '-'}`}</Text>
        <Text style={{ alignSelf: 'center', marginBottom: 5 }}>Topup Amount (Rp)</Text>
        <Text style={{ alignSelf: 'center', marginBottom: 5 }}>{amount}</Text>
        <Text style={{ alignSelf: 'center', marginBottom: 5, marginTop: 10 }}>Password For Confirmation</Text>
        <Item fixedLabel regular>
          <Input secureTextEntry style={{ textAlign: 'center' }} placeholder='your current password' placeholderTextColor='#d3d3d3' onChangeText={this.handleOnChangeInputPassword.bind(this)} />
        </Item>
        <Button block style={{ margin: 15 }} onPress={this.handleOnPressSubmitForm.bind(this)}>
          <Text>CONFIRM</Text>
        </Button>
        {/* {this.props.otpvalidationFormSubmitMSG.ir && <Spinner color='green' />} */}
      </Form>
    )
  }
}
