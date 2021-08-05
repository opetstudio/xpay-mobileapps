import {
  // createReactNavigationReduxMiddleware,
  //   reduxifyNavigator,
  // createReduxContainer,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
import AppNavigation from '../navigation/AppNavigation'

export const navReducer = createNavigationReducer(AppNavigation)

// export const reducer = (state, action) => {
//   const newState = AppNavigation.router.getStateForAction(action, state)
//   return newState || state
// }
