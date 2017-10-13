import should from 'should'
import reducer from '@redux/feed/reducer'

describe('feed reducer', () => {

  it('should handle GET_PROFILE_FEED correctly', () => {
    const action = {
      type: 'GET_PROFILE_FEED',
      data: {
        result: {
          posts: 1
        }
      }
    }
    const newState = reducer({}, action)

    should(newState).deepEqual({
      profile: 1
    })
  })


  it('should handle GET_POPULAR_FEED correctly', () => {
    const action = {
      type: 'GET_POPULAR_FEED',
      data: {
        result: {
          posts: 1
        }
      }
    }
    const newState = reducer({}, action)

    should(newState).deepEqual({
      popular: 1
    })
  })
})
