import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import ListMerchant from '../../components/ListMerchant'
import ListAction from './redux'
// import { NavigationEvents } from 'react-navigation'
// import _ from 'lodash'

class index extends Component {
  componentDidMount () {
    this.props.navigation.addListener('didFocus', () => {
      this.props.fetchMerchant()
    })
  }

  render () {
    // const { firstName, lastName, fullName, profilePicture, email, saldo } = this.props
    return (
      <View>
        <ListMerchant
          {...this.props}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

export default connect((state, ownProps) => ({
  dataMerchant: state.listallmerchant.merchant_data
})
, (dispatch) => ({
  fetchMerchant: data => dispatch(ListAction.fetchAllMerchant(data))
}))(index)
