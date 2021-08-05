import React, { Component } from 'react'
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
  Container,
  Left,
  Right,
  Textarea,
  Toast
} from 'native-base'
import { View, StyleSheet } from 'react-native'

export default class OtpChangeEmail extends Component {
  componentDidMount () {
    const { newEmail, otpRefNum, userId } = this.props
    this.setState({ menit: 0, detik: 0, newEmail, otpRefNum, userId })
  }
  // componentDidMount(){
  //   this.interval = setInterval(
  //     () => this.setState((e)=> ({ detik: e.detik - 1 })),
  //     900000
  //   );
  // }
  // componentDidUpdate(){
  //   if(this.state.timer === 1){
  //     clearInterval(this.interval);
  //   }
  // }
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }
  // _handleOtp(){

  // }
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }
  handleOnPress () {
    const { onSubmit } = this.props
    const { newEmail, otpRefNum, userId, otp } = this.state
    onSubmit({ newEmail, otpRefNum, userId, otp })
  }

  render () {
    console.log('render OtpChangeEmail. state==>', this.state)
    const { status, errors } = this.props
    return (
      <Content>
        <Form>
          <Item rounded>
            {/* <Input secureTextEntry style={{ style: 'bold', textAlign: 'center' }} placeholder='OTP' value={this.state.value} onChangeText={e => this.setState({ otp: e })} autoFocus /> */}
            <Input
              secureTextEntry
              placeholder='OTP'
              style={{ textAlign: 'center' }}
              onChangeText={e => this.setState({ otp: e })}
            />
          </Item>
          {status === 400 && errors.map((r, i) => (<Text style={{ color: 'red', textAlign: 'center' }} key={i}>{r.message}</Text>))}
          {status === 200 && <Text style={{ color: 'green', textAlign: 'center' }}>Success update email</Text>}
          <Button rounded block style={{ margin: 15, backgroundColor: 'rgba(218,55,49,1)' }} onPress={this.handleOnPress.bind(this)}>
            <Text>Submit</Text>
          </Button>
        </Form>
        {/* <Button style={{ alignSelf: 'center' }} onPress={this.handleOnPress.bind(this)}>Submit</Button> */}
      </Content>
    )
  }
}
const styles = StyleSheet.create({
  messageFrame: {
    borderColor: 'black',
    borderWidth: 2
  }
})
// export default connect((state) => ({
//   email: UserprofileSelectors.getEmail(state.userprofile),
//   otpRefNum: UserprofileSelectors.getOtpRefNum(state.userprofile)
// }),
// (dispatch) => ({
//   changeUserEmail: (data) => dispatch(ChangeEmailActions.editEmailResponse(data))
// }))(OtpChangeEmail)
