import api from '@lib/api'

export function getUser() {
  return dispatch => api.getUser()
    .then(({ data }) => {
      dispatch({
        data,
        type: 'GET_USER',
      })
    })
}
