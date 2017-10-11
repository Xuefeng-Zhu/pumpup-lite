import api from '@lib/api'

export default {
  getProfileFeed,
  getPopularFeed
}

function getProfileFeed() {
  return dispatch => api.getProfileFeed()
    .then(({ data }) => {
      dispatch({
        data,
        type: 'GET_PROFILE_FEED',
      })
    })
}

function getPopularFeed() {
  return dispatch => api.getPopularFeed()
    .then(({ data }) => {
      dispatch({
        data,
        type: 'GET_POPULAR_FEED',
      })
    })
}
