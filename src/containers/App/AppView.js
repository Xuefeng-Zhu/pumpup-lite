import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import {
  Divider,
} from 'react-native-elements'

// Consts and Libs
import {
  AppStyles,
  AppSizes
} from '@theme/'

// Components
import {
  UserProfile,
  ProfileFeed,
  PopularFeed,
} from '@ui/'

const styles = StyleSheet.create({
  container: {
    paddingTop: AppSizes.statusBarHeight
  }
})

export default class AppLaunch extends Component {

  static componentName = 'AppLaunch';

  static propTypes = {
    profile: PropTypes.object.isRequired,
    profileFeed: PropTypes.array.isRequired,
    popularFeed: PropTypes.array.isRequired,
  }

  constructor() {
    super()
  }

  render() {
    const { profile, profileFeed, popularFeed } = this.props

    return (
      <ScrollView style={[AppStyles.container, styles.container]}>
        <UserProfile profile={profile} />
        <Divider />

        <ProfileFeed posts={profileFeed}/>

        <PopularFeed posts={popularFeed}/>
      </ScrollView>
    )
  }
}
