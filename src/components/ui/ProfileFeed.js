import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: 300,
    padding: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width,
    flex: 1
  },
})

export default class ProfileFeed extends Component {

  static componentName = 'ProfileFeed';

  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  renderPost(post) {
    const { objectId, thumbnail } = post

    return (
      <View style={styles.slide} key={objectId}>
        <Image
          style={styles.image}
          source={{uri: thumbnail}}
        />
      </View>
    )
  }

  render() {
    const { posts } = this.props

    return (
      <View style={styles.container}>
        <Swiper>
          {posts.map(post => this.renderPost(post))}
        </Swiper>
      </View>
    )
  }
}
