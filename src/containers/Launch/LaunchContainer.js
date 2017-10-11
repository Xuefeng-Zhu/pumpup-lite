/**
 * Launch Screen Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux'

// Actions
import UserActions from '@redux/user/actions'
import FeedActions from '@redux/feed/actions'

// The component we're mapping to
import AppLaunchRender from './LaunchView'

// What data from the store shall we send to the component
const mapStateToProps = () => ({})

// Any actions to map to the component
const mapDispatchToProps = {
  getUser: UserActions.getUser,
  getProfileFeed: FeedActions.getProfileFeed,
  getPopularFeed: FeedActions.getPopularFeed,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLaunchRender)
