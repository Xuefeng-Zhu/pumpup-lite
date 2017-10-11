import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
} from 'react-native'
import ImageSlider from 'react-native-image-slider';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})

export default class ProfileFeed extends Component {

  static componentName = 'ProfileFeed';

  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    const images = posts.map(post => post.thumbnail)

    return (
      <View style={styles.container}>
        <ImageSlider images={images}>
        </ImageSlider>
      </View>
    )
  }
}
