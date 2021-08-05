import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Text,
  Spinner,
  Label
} from 'native-base'
import SignupAction from './redux'
import { Colors } from '../../themes'
import _ from 'lodash'
import { is, isEmpty } from 'ramda'
import { isEmptyOrNull } from '../../lib/Utils'

class FormSignup extends Component {
  state={
    email:'',
    msg:''
  }
  componentDidMount () {
    const { signupFormReset } = this.props
    signupFormReset()
  }

  handleOnPressSubmitForm () {
    const { handleOnSubmit,isRequest,status,signupFormReset } = this.props
    const { email,msg } = this.state
    const { signupFormSubmit } = this.props
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {  
      signupFormSubmit({ email, deviceId: new Date().getTime() }) 
    }
    else{ 
      if(isEmptyOrNull(email)) 
      {
        this.setState({msg:'Form email tidak boleh kosong'})
        signupFormReset()
      }
      else{
        this.setState({msg:'Email tidak valid'}); 
        signupFormReset()
      }
    }
  }

  render () {
    const { errors, isRequest } = this.props
    const { email,msg } = this.state 
    return (
      <Form>
         
        <Text style={{ alignSelf: 'center', marginBottom: 10 }}>Email</Text>
        <Item fixedLabel>
          {/* <Label floatingLabel>Email or Phone Number</Label> */}
          <Input style={{ textAlign: 'center' }} placeholder='ex. myemail@gmail.com' placeholderTextColor='#d3d3d3' onChangeText={text => this.setState({ email: text })} />
        </Item>

        {!_.isEmpty(this.state.msg) && _.isEmpty(errors) && <Text style={{ color: 'red', textAlign: 'center',textAlign:'center' }}>{msg}</Text>}
        {(!isRequest && !_.isEmpty(errors)) && errors.map((r, i) => <Text key={i} style={{ color: 'red',textAlign: 'center',marginBottom: 10 }}>{r.message}</Text>)}

        {!isRequest && (
          <Button block style={{ margin: 15, backgroundColor: 'rgba(218,55,49,1)'}} onPress={this.handleOnPressSubmitForm.bind(this)}>
            <Text>Submit</Text>
          </Button>
        )}
        {isRequest && <Spinner color='green' />}
      </Form>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  status: state.signup.status,
  errors: state.signup.errors,
  isRequest: state.signup.isRequest
})

const mapDispatchToProps = dispatch => ({
  signupFormSubmit: data => dispatch(SignupAction.signupFormSubmit(data)),
  signupFormReset: data => dispatch(SignupAction.signupFormReset())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignup)
