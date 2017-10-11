export const initialState = {}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_USER':
    return {
      ...state,
      profile: action.data,
    }
  default:
    return state
  }
}
