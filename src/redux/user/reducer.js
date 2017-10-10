export const initialState = {}

export default function sideMenuReducer(state = initialState, action) {
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
