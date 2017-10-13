import should from 'should'
import { userProfileSelector } from '@redux/user/selectors'

describe('user selectors', () => {


  describe('userProfileSelector', () => {

    it('should select user profile correctly', () => {
      const state = {
        user: {
          profile: {
            name: 1,
            bio: 2,
            profileImage: 3,
            random: 4,
          }
        }
      }
      const profile = userProfileSelector(state)

      should(profile).deepEqual({
        name: 1,
        bio: 2,
        profileImage: 3
      })
    })
  })
})
