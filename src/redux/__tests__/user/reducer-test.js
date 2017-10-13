import should from 'should'
import reducer from '@redux/user/reducer'

describe('user reducer', () => {

  it('should handle GET_USER correctly', () => {
    const action = {
      type: 'GET_USER',
      data: 1
    }
    const newState = reducer({}, action)

    should(newState).deepEqual({
      profile: 1
    })
  })
})
