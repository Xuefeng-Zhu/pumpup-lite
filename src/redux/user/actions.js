/**
 * Feed actions
 */

import api from '@lib/api'

export default {
  getUser,
}

/**
 * Fetch user profile through api
 *
 * @return {Function}
 */
function getUser() {
  return dispatch => api.getUser()
    .then(({ data }) => {
      dispatch({
        data,
        type: 'GET_USER',
      })
    })
}
