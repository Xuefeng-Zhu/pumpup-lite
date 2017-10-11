import api from '@lib/api'

export default {
  getProfileFeed,
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
