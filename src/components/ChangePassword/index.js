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
import { StyleSheet, Image, View, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { isEmptyOrNull } from '../../lib/Utils'
import ChangePasswordActions, { ChangePasswordSelectors } from '../../containers/ChangePassword/redux'
import SessionAction, { SessionSelectors } from '../../redux/SessionRedux'

export default class ChangePassword extends Component {
  state = {
    newPassword: '',
    newPasswordConf: '',
    password: ''
  }

  handleOnSubmit () {
    const { onSubmit, userId } = this.props
    const { password, newPassword, newPasswordConf } = this.state
    onSubmit({ password, newPassword, newPasswordConf, userId })
    // this.props.changePassword({ user_id: this.props.userId, new_password: this.state.password_baru, password: this.state.password })
  }

  render () {
    const { password, newPassword, newPasswordConf } = this.state
    const { status, errors } = this.props
    // const { password_baru, password_kon, button } = this.state
    // if (!isEmptyOrNull(this.props.status)) {
    //   console.log('statuss=====>', this.props.status)
    //   if (this.props.status == 200) {
    //     Alert.alert('Ganti password sukses', 'Pastikan anda ingat password anda untuk login kembali', [{ text: 'Ok', onPress: () => { this.props.logout() } }], { cancelable: false })
    //     this.props.resetChangePassword()
    //   } else {
    //     console.log('invoke error')
    //     Alert.alert('Gagal mengganti password', this.props.error, [{ text: 'Ok', onPress: () => this.props.resetChangePassword() }], { cancelable: false })
    //   }
    // }

    return (
      <Form style={{ padding: 20 }}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 10,
            marginHorizontal: 10
          }}
        >
            Pastikan password berisi huruf besar, kecil, angka atau yang mudah
            anda ingat
        </Text>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input
            secureTextEntry
            placeholder='Password lama'
            style={{ textAlign: 'center', width: '100%' }}
            onChangeText={e => {
              this.setState({ password: e })
            }}
          />
        </Item>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input
            secureTextEntry
            placeholder='Password baru'
            style={{ textAlign: 'center', width: '100%' }}
            onChangeText={e => {
              this.setState({ newPassword: e })
            }}
          />
        </Item>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input
            secureTextEntry
            placeholder='Konfirmasi password baru'
            style={{ textAlign: 'center', width: '100%' }}
            onChangeText={e => {
              this.setState({ newPasswordConf: e })
            }}
          />
        </Item>
        {newPassword !== newPasswordConf && <Text style={{ textAlign: 'center', color: '#e84a4a', marginTop: 10 }}>Konfirmasi password baru tidak sama</Text>}
        {status === 400 && errors.map((r, i) => (<Text style={{ color: 'red', textAlign: 'center' }} key={i}>{r.message}</Text>))}
        {status === 200 && <Text style={{ color: 'green', textAlign: 'center' }}>Success update password</Text>}
        <Button rounded block style={{ margin: 15 , backgroundColor: 'rgba(218,55,49,1)' }} disabled={(_.isEmpty(password) || _.isEmpty(newPassword) || _.isEmpty(newPasswordConf) || newPassword !== newPasswordConf)} onPress={this.handleOnSubmit.bind(this)}><Text>Submit</Text></Button>
        {/* {isEmptyOrNull(password_baru) || isEmptyOrNull(password_kon)
            ? <Text style={{ textAlign: 'center', color: '#e84a4a', marginTop: 10 }} />
            : [
              (
                password_baru == password_kon
                  ? <Text style={{ textAlign: 'center', color: '#32a852', marginTop: 10 }}>Ok password sama</Text>
                  : <Text style={{ textAlign: 'center', color: '#e84a4a', marginTop: 10 }}>Konfirmasi password baru tidak sama</Text>
              ),
              <Text style={{ textAlign: 'center', color: '#e84a4a', marginTop: 10 }} />
            ]}
          <View>
            {isEmptyOrNull(password_baru) || isEmptyOrNull(password_kon)
              ? <Button rounded block style={{ marginHorizontal: 15 }} disabled><Text>Submit</Text></Button>
              :[
                (
                  password_baru != password_kon
                    ? <Button rounded block style={{ marginHorizontal: 15 }} disabled><Text>Submit</Text></Button>
                    : <Button rounded block style={{ marginHorizontal: 15 }} disabled={false} onPress={this.handleOnSubmit.bind(this)}><Text>Submit</Text></Button>
                )
              ]}
          </View> */}
      </Form>
    )
  }
}
// export default connect((state) => ({
//   error: ChangePasswordSelectors.getError(state.changepassword),
//   status: ChangePasswordSelectors.getStatus(state.changepassword),
//   isRequest: ChangePasswordSelectors.getIsRequest(state.changepassword),
//   userId: SessionSelectors.getUserId(state.session)
// }), (dispatch) => ({
//   changePassword: (data) => dispatch(ChangePasswordActions.changePassword(data)),
//   resetChangePassword: (data) => dispatch(ChangePasswordActions.resetRequestChangePassword()),
//   logout: (data) => dispatch(SessionAction.sessionLogout(data))
// }))(ChangePassword)
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
  },
  messageFrame: {
    borderColor: 'black',
    borderWidth: 2
  }
})
