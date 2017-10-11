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
    feed: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { feed } = this.props

    return (
      <View style={styles.container}>
        <Masonry
          sorted
          columns={3}
          bricks={feed}
        />
      </View>
    )
  }
}
