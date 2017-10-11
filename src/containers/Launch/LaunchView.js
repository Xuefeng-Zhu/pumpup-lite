/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/'

// Styles
const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },
})

// Component
class AppLaunch extends Component {
  static componentName = 'AppLaunch';

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getProfileFeed: PropTypes.func.isRequired,
    getPopularFeed: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    console.ignoredYellowBox = ['Setting a timer']
  }

  componentDidMount() {
    // Load required data
    Promise.all([
      this.props.getUser(),
      this.props.getProfileFeed(),
      this.props.getPopularFeed()
    ]).then(() => {
      Actions.app({ type: 'reset' })
    })
  }

  render = () => (
    <View style={[AppStyles.container]}>
      <ImageBackground
        source={require('../../images/launch.jpg')}
        style={[styles.launchImage, AppStyles.containerCentered]}
      >
        <ActivityIndicator
          animating
          size={'large'}
          color={'#C1C5C8'}
        />
      </ImageBackground>
    </View>
  );
}

/* Export Component ==================================================================== */
export default AppLaunch
