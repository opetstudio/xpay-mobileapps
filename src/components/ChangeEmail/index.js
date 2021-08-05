/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Label,
  Text,
  Icon,
  Spinner,
  Left,
  Right,
  Textarea,
  Toast
} from 'native-base'
import _ from 'lodash'
import { Colors } from '../../themes'
import { StyleSheet, Image, View, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { prop } from 'ramda'
import ChangeEmailActions, { ChangeEmailselectors, ChangeEmailselectorsDone } from '../../containers/ChangeEmail/redux'
import { isEmptyOrNull } from '../../lib/Utils'

export default class ChangeEmail extends Component {
  // state = {
  //   email: '',
  //   password: '',
  //   msgEmail: ''
  //   // msgColorEmail: '',
  //   // msgColorPassword: '',
  //   // button: true,
  //   // msgEmail: '',
  //   // msgPassword: ''
  // };

  // _validateEmail (e) {
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {
  //     // this.setState({ email: e, msgEmail: 'Email valid', button: false, msgColorEmail: '#32a852' })
  //   } else {
  //     // this.setState({
  //     //   Email: e,
  //     //   msgEmail: 'Email tidak valid',
  //     //   button: true,
  //     //   msgColorEmail: '#e84a4a'
  //     // })
  //     this.setState({ msgEmail: 'Email tidak valid' })
  //   }
  // }

  // async _handleSubmit () {
  //   const { Password, Email, msgEmail, msgPassword } = this.state
  //   if (this.props.isRequest) {
  //     this.props.navigation.navigate('ScreenMyProfile')
  //   } else {
  //     if (this.props.status != '400') {
  //       if (isEmptyOrNull(Password) && isEmptyOrNull(Email)) this.setState({ msgColorEmail: '#e84a4a', msgColorPassword: '#e84a4a', msgEmail: 'Field email tidak boleh kosong', msgPassword: 'Field password tidak boleh kosong' })
  //       else if (isEmptyOrNull(Password)) this.setState({ msgColorPassword: '#e84a4a', msgPassword: 'Field password tidak boleh kosong' })
  //       else if (isEmptyOrNull(Email)) this.setState({ msgColorEmail: '#e84a4a', msgEmail: 'Field email tidak boleh kosong' })
  //       else {
  //         await this.props.changeUserEmail({ new_email: this.state.Email, user_id: this.props.userId, password: this.state.Password })
  //         console.log('Update')
  //       }
  //     } else {
  //       this.setState({ msgPassword: this.props.error, msgColorPassword: '#e84a4a' })
  //     }
  //   }
  // }
  componentDidMount () {
    const { email } = this.props
    this.setState({ email })
  }

  handleOnPress () {
    const { onSubmit, userId } = this.props
    const { email, password } = this.state
    onSubmit({ userId, email, password })
  }

  render () {
    // const {Email,msgEmail,msgPassword,msgColorPassword,msgColorEmail,button} = this.state;
    // console.log("Is error: ", this.props.error," | Is status: ",this.props.status)
    const { status, errors } = this.props
    const { email } = this.state
    return (
      <Form style={{ padding: 20 }}>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input
            placeholder='New Email'
            style={{ textAlign: 'center', width: '100%' }}
            onChangeText={(txt) => this.setState({ email: txt })}
            value={email}
          />
        </Item>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input
            secureTextEntry
            placeholder='Current Password for Validation'
            style={{ textAlign: 'center',width: '100%' }}
            onChangeText={e => this.setState({ password: e })}
          />
        </Item>
        {status === 400 && errors.map((r, i) => (<Text style={{ color: 'red', textAlign: 'center' }} key={i}>{r.message}</Text>))}
        <Button rounded block style={{ margin: 15, backgroundColor:'rgba(218,55,49,1)' }} disabled={false} onPress={this.handleOnPress.bind(this)}>
          <Text>Submit</Text>
        </Button>
      </Form>
    )
  }
}

// export default connect((state) => ({
//       otpRefNum:ChangeEmailselectorsDone.getError(state.changeemail),
//       error:ChangeEmailselectorsDone.getError(state.changeemail),
//       status:ChangeEmailselectorsDone.getStatus(state.changeemail),
//       isRequest:ChangeEmailselectors.getIsRequest(state.changeemail)
//      }),
//     (dispatch) => ({
//         changeUserEmail: (data) => dispatch(ChangeEmailActions.editEmailResponse(data)),
//       }))
//       (ChangeEmail)

const styles = StyleSheet.create({
  form: {
    marginTop: 10
  },
  image: {
    width: 103,
    height: 103,
    backgroundColor: '#CCC',
    borderRadius: 100,
    margin: 10
  },
  uploadImage: {
    right: 0,
    bottom: 0,
    position: 'absolute',
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: '#383838',
    borderRadius: 150,
    color: 'white'
  }
})
