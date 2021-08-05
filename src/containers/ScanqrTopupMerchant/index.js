import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScanqrTopupMerchant from '../../components/ScanqrTopupMerchant'
import ScanqrTopupMerchantActions, { ScanqrSelectors } from './redux'

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
    const { userId, scanqrSubmitTopupMerchant } = this.props
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
    scanqrSubmitTopupMerchant({
      merchantId: dataQR.merchant_id,
      institutionId: dataQR.institution_id,
      qrId: dataQR.qr_id,
      userId,
      merchantName: dataQR.merchant_name,
      amount: dataQR.amount,
      serialNumber: dataQR.serial_number,
      transactionId: dataQR.transaction_id,
      serialId: dataQR.serial_id
    })
  }

  render () {
    const { isRequest, errors, status } = this.props
    return (
      <ScanqrTopupMerchant onSuccessScan={this.handleOnSuccessScan.bind(this)} isRequest={isRequest} errors={errors} status={status} />
    )
  }
}

export default connect((state) => ({
  isRequest: ScanqrSelectors.getIsRequest(state.scanqrTopupMerchant),
  userId: state.session.userId,
  errors: state.scanqrTopupMerchant.errors,
  status: state.scanqrTopupMerchant.status
}), (dispatch) => ({
  scanqrSubmitTopupMerchant: (data) => dispatch(ScanqrTopupMerchantActions.scanqrSubmitTopupMerchant(data)),
  scanqrResetForm: (data) => dispatch(ScanqrTopupMerchantActions.scanqrResetForm())
}))(index)
