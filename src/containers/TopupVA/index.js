import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Container } from 'native-base'
import TopupVA from '../../components/TopupVA'
import ChangeusernameActions from './redux'

export class TopupVAContainer extends Component {

  render () {
    const { username, userId, status, errors } = this.props
    return (
      <TopupVA
        novirtualaccount={novirtualaccount}
        userId={userId}
        status={status}
        errors={errors}
      />
    )
  }
}
export default TopupVA