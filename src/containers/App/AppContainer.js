/**
 * Main App Screen Container
 */

import { connect } from 'react-redux'

// Selectors
import { profileFeedSelector, popularFeedSelector } from '@redux/feed/selectors'
import { userProfileSelector } from '@redux/user/selectors'

// The component we're mapping to
import AppRender from './AppView'

// What data from the store shall we send to the component
const mapStateToProps = state => ({
  profile: userProfileSelector(state),
  profileFeed: profileFeedSelector(state),
  popularFeed: popularFeedSelector(state),
})

// Any actions to map to the component
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppRender)
