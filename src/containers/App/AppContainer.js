/**
 * Launch Screen Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux'

// The component we're mapping to
import AppRender from './AppView'

// What data from the store shall we send to the component
const mapStateToProps = state => ({
  profile: state.user.profile,
  profileFeed: state.feed.profile,
})

// Any actions to map to the component
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppRender)
