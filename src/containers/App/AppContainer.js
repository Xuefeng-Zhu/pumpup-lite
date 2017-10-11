/**
 * Main App Screen Container
 */

import { connect } from 'react-redux'

// The component we're mapping to
import AppRender from './AppView'

// What data from the store shall we send to the component
const mapStateToProps = state => ({
  profile: state.user.profile,
  profileFeed: state.feed.profile,
  popularFeed: state.feed.popular,
})

// Any actions to map to the component
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppRender)
