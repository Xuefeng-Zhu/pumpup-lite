import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import {
  Divider,
} from 'react-native-elements'

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/'

// Components
import { UserProfile } from '@ui/'


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    paddingTop: AppSizes.statusBarHeight
  }
})

/* Component ==================================================================== */
class AppLaunch extends Component {

  static componentName = 'AppLaunch';

  static propTypes = {
    profile: PropTypes.object.isRequired,
  }

  constructor() {
    super()
  }

  componentDidMount() {
    // Show status bar on app launch

  }

  render() {
    const { profile } = this.props

    return (
      <View style={[AppStyles.container, styles.container]}>
        <UserProfile profile={profile} />
        <Divider></Divider>


      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default AppLaunch
