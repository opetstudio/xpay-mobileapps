import React from 'react'
import { connect } from 'react-redux'
import StyledStatusBar from '../../components/StyledStatusBar'
import {AppSelectors} from '../../redux/AppRedux'
// import { selectStatusBarHidden } from '../VideoPlayerFullScreen/selectors'
// import { createStructuredSelector } from 'reselect'

const mapStateToProps = (state) => {
  return {
    isHidden: AppSelectors.getIsStatusBarHidden(state.app)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

export default connect(mapStateToProps)(StyledStatusBar)
