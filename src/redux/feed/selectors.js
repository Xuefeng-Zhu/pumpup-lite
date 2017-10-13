/**
 * Feed selectors
 */

import { createSelector } from 'reselect'

export const profileFeedSelector = createSelector(
  state => state.feed.profile,
  posts => posts.map(post => post.thumbnail)
)

export const popularFeedSelector = createSelector(
  state => state.feed.popular,
  posts => posts.map(post => ({
    uri: post.thumbnail,
    key: post.objectId,
  }))
)
