import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionHistory from '../../components/TransactionList'
import SignupAction from './redux'
import { timeConverter, dateConverter } from './util'

export class index extends Component {
  state = {
    transactionHistoryList: []
  }

  componentDidMount () {
    console.log('componentDidMount TransactionHistory')
    this.props.navigation.addListener('didFocus', () => {
      const { userId, transactionHistory, transactionList } = this.props
      console.log('on didFocus')
      transactionHistory({ user_id: userId })
      this.setState({ transactionHistoryList: dateConverter(transactionList.map(e => timeConverter(e.created_at)), transactionList) })
    })
  }

  render () {
    const { transactionHistoryList } = this.state
    console.log('transactionHistoryList===>', transactionHistoryList)
    return (
      <TransactionHistory
        data={transactionHistoryList}
      />
    )
  }
}

const mapStateToProps = state => ({
  transactionList: state.transactionHistory.transactionHistoryList,
  userId: state.session.userId
})

const mapDispatchToProps = dispatch => ({
  transactionHistory: data => dispatch(SignupAction.transactionHistory(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)
