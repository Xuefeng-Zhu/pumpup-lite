/**
 * Component showing profile posts in slider format
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
} from 'react-native'
import ImageSlider from 'react-native-image-slider'

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})

export default class ProfileFeed extends Component {

  static componentName = 'ProfileFeed';

  static propTypes = {
    feed: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { feed } = this.props

    return (
      <View style={styles.container}>
        <ImageSlider images={feed}>
        </ImageSlider>
      </View>
    )
  }
}
