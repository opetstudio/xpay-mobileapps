import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import UserEditProfile from '../../components/UserEditProfile'
import UserprofileActions from './redux'

class index extends Component {
  componentDidMount () {
    const { resetEditProfile } = this.props
    resetEditProfile()
  }

  componentWillUnmount () {
    const { resetEditProfile } = this.props
    resetEditProfile()
  }

  handleOnSubmit (payload) {
    const { editUserProfile } = this.props
    editUserProfile(payload)
  }

  render () {
    const { navigation, firstName, lastName, userId, address, status, errors, nickname,profilePicture } = this.props
    return (
      <UserEditProfile
        navigation={navigation}
        firstName={firstName}
        lastName={lastName}
        address={address}
        userId={userId}
        nickname={nickname}
        handleOnSubmit={this.handleOnSubmit.bind(this)}
        status={status}
        errors={errors}
        profilePicture={profilePicture}
      />
    )
  }
}
export default connect((state) => ({
  isRequest: state.userprofile.isRequest,
  errors: state.userprofile.errors,
  status: state.userprofile.status,
  firstName: state.userprofile.firstName,
  lastName: state.userprofile.lastName,
  userId: state.session.userId,
  address: state.userprofile.address,
  profilePicture: state.userprofile.profilePicture,
  nickname: state.userprofile.nickname
}), (dispatch) => ({
  editUserProfile: (data) => dispatch(UserprofileActions.userprofileEditProfile(data)),
  resetEditProfile: () => dispatch(UserprofileActions.userprofileResetEditProfile())
}))(index)
