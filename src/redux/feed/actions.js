/**
 * Feed actions
 */

import api from '@lib/api'

export default {
  getProfileFeed,
  getPopularFeed
}


/**
 * Fetch profile posts through api
 *
 * @return {Function}
 */
function getProfileFeed() {
  return dispatch => api.getProfileFeed()
    .then(({ data }) => {
      dispatch({
        data,
        type: 'GET_PROFILE_FEED',
      })
    })
}

/**
 * Fetch popular posts through api
 *
 * @return {Function}
 */
function getPopularFeed() {
  return dispatch => api.getPopularFeed()
    .then(({ data }) => {
      dispatch({
        data,
        type: 'GET_POPULAR_FEED',
      })
    })
}
