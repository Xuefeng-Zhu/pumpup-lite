/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

// Consts and Libs
import { AppConfig } from '@constants/'


// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer'
import App from '@containers/App/AppContainer'

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    <Scene
      hideNavBar
      key={'app'}
      component={App}
      analyticsDesc={'App: App Launched'}
    />
  </Scene>,
)
