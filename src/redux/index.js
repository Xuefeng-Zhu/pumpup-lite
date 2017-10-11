/**
 * Combine All Reducers
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { combineReducers } from 'redux'

// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom
import router from '@redux/router/reducer'
import user from '@redux/user/reducer'
import feed from '@redux/feed/reducer'

// Combine all
const appReducer = combineReducers({
  router,
  user,
  feed,
})

// Setup root reducer
export default function rootReducer(state, action) {
  const newState = (action.type === 'RESET') ? undefined : state
  return appReducer(newState, action)
}

