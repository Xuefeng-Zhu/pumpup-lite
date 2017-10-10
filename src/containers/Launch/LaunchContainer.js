/**
 * Launch Screen Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux'

// Actions
import * as UserActions from '@redux/user/actions'

// The component we're mapping to
import AppLaunchRender from './LaunchView'

// What data from the store shall we send to the component?
const mapStateToProps = () => ({})

// Any actions to map to the component?
const mapDispatchToProps = {
  getUser: UserActions.getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLaunchRender)
