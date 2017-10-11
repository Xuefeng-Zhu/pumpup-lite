export const initialState = {}

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_PROFILE_FEED':
    return {
      ...state,
      profile: action.data.result.posts,
    }
  default:
    return state
  }
}
