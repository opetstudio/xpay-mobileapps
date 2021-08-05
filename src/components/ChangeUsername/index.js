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

export default class ChangeUsername extends Component {
  // constructor (props) {
  //   super(props)
  //   this._check = this._check.bind(this)
  //   this.state = {
  //     username: '',
  //     password: ''
  //   }
  // }

  // async _check () {
  //   const uname = this.state.userName
  //   const pass = this.state.password
  //   if (pass.length > 0 && uname.length > 0) {
  //     if (uname.length < 5) {
  //       this.setState({ msg: 'Panjang username minimal 5 karakter' })
  //     } else if (/\W/.test(uname)) {
  //       this.setState({ msg: 'Tidak diperbolehkan karakter khusus dan spasi' })
  //     } else {
  //       await this.setState({ msg: '' })
  //       this.props.changeUsername({ user_id: this.props.userId, new_username: this.state.userName, password: this.state.password })
  //     }
  //   } else {
  //     this.setState({ msg: 'Tidak boleh ada form yang kosong' })
  //   }
  // }

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
    const { username, password } = this.state
    const { status, errors } = this.props
    return (
      <Form style={{ padding: 20 }}>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input placeholder='Username Baru' style={{ textAlign: 'center', width: '100%' }} onChangeText={(e) => { this.setState({ username: e }) }} value={username} />
        </Item>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input placeholder='Password' style={{ textAlign: 'center', width: '100%' }} secureTextEntry onChangeText={(e) => { this.setState({ password: e }) }} value={password} />
        </Item>
        {status === 400 && errors.map((r, i) => (<Text style={{ color: 'red', textAlign: 'center' }} key={i}>{r.message}</Text>))}
        {status === 200 && <Text style={{ color: 'green', textAlign: 'center' }}>Success update username</Text>}
        <Button rounded block style={{ margin: 15 , backgroundColor:'rgba(218,55,49,1)'}} onPress={this.handleOnPress.bind(this)}>
          <Text>Submit</Text>
        </Button>
      </Form>
    )
  }
}
