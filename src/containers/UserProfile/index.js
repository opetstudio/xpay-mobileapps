import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import UserProfile from '../../components/UserProfile'
import UserprofileActions from './redux'
import { NavigationEvents } from 'react-navigation'
import _ from 'lodash'

class index extends Component {
  render () {
    const { firstName, lastName, fullName, profilePicture, email, saldo, userId, fetchUserProfileById } = this.props
    return (
      <View>
        <NavigationEvents onWillFocus={payload => fetchUserProfileById({ userId: userId })} />
        <UserProfile
          fullName={fullName}
          profilePicture={profilePicture}
          email={email}
          first_name={firstName}
          last_name={lastName}
          saldo={saldo}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

export default connect((state, ownProps) => ({
  saldo: state.userprofile.saldo,
  isRequest: state.userprofile.isRequest,
  fullName: state.userprofile.fullName,
  firstName: state.userprofile.firstName,
  lastName: state.userprofile.lastName,
  profilePicture: state.userprofile.profilePicture,
  email: state.userprofile.email,
  userId: state.session.userId
}), dispatch => ({
  fetchUserProfileById: (data) => dispatch(UserprofileActions.userprofileFetchUserProfileById(data))
}))(index)
