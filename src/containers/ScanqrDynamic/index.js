import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScanqrDynamic from '../../components/ScanqrDynamic'
import ScanqrDynamicActions, { ScanqrSelectors } from './redux'

class index extends Component {
  componentDidMount () {
    const { scanqrResetForm } = this.props
    scanqrResetForm()
  }

  // componentDidMount () {
  //   setTimeout(function () { // Start the timer
  //     // this.setState({ render: true }) // After 1 second, set render to true
  //     const { scanqrSubmitPayment } = this.props
  //     scanqrSubmitPayment({ qrString: '' })
  //   }.bind(this), 4000)
  // }

  jsonStringParsing (str) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return {}
    }
}

  handleOnSuccessScan (e) {
    const { userId, scanqrSubmitPaymentDynamic } = this.props
    const check = e.data.substring(0, 4)
    console.log('scanned data' + check)
    if (check === 'http') {
    //   Linking
    //     .openURL(e.data)
    //     .catch(err => console.error('An error occured', err))
    } else {
      this.setState({
        result: e,
        scan: false,
        ScanResult: true
      })
    }
    console.log('scan result ===> ', e)
    const dataQR = this.jsonStringParsing(e.data)
    // data => "{"qr_code":null,"created_at":"1584691779155","updated_at":"1584691779155","merchant_id":"1583910475615LIYmW","_id":"5e747a43ba98774dd3355c38","qr_id":"1584691779155duhRw","type":"STATIC","status":"ACTIVE"}"
    // hit service payment
    scanqrSubmitPaymentDynamic({
      merchantId: dataQR.merchant_id,
      institutionId: dataQR.institution_id,
      qrId: dataQR.qr_id,
      userId,
      merchantName: dataQR.merchant_name,
      amount: dataQR.amount,
      billingId: dataQR.bill_id,
      transactionId: dataQR.transaction_id
    })
  }

  render () {
    const { isRequest, errors, status } = this.props
    return (
      <ScanqrDynamic onSuccessScan={this.handleOnSuccessScan.bind(this)} isRequest={isRequest} errors={errors} status={status} />
    )
  }
}

export default connect((state) => ({
  isRequest: ScanqrSelectors.getIsRequest(state.scanqrDynamic),
  userId: state.session.userId,
  errors: state.scanqrDynamic.errors,
  status: state.scanqrDynamic.status
}), (dispatch) => ({
  scanqrSubmitPaymentDynamic: (data) => dispatch(ScanqrDynamicActions.scanqrSubmitPaymentDynamic(data)),
  scanqrResetForm: (data) => dispatch(ScanqrDynamicActions.scanqrResetForm())
}))(index)
