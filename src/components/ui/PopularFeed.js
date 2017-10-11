/**
 * Component showing popular posts in grid format
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
} from 'react-native'
import Masonry from 'react-native-masonry'


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default class PopularFeed extends Component {

  static componentName = 'PopularFeed';

  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    const bricks = posts.map(post => ({
      uri: post.thumbnail,
      key: post.objectId,
    }))

    return (
      <View style={styles.container}>
        <Masonry
          sorted
          columns={3}
          bricks={bricks}
        />
      </View>
    )
  }
}
