import should from 'should'
import { profileFeedSelector, popularFeedSelector } from '@redux/feed/selectors'

describe('feed selectors', () => {


  describe('profileFeedSelector', () => {

    it('should select profile feed correctly', () => {
      const state = {
        feed: {
          profile: [
            { thumbnail: 1 },
            { thumbnail: 2 },
          ]
        },
      }
      const feed = profileFeedSelector(state)

      should(feed).deepEqual([1, 2])
    })
  })


  describe('popularFeedSelector', () => {
    
    it('should select popular feed correctly', () => {
      const state = {
        feed: {
          popular: [
            { thumbnail: 1, objectId: 'a' },
            { thumbnail: 2, objectId: 'b' },
          ]
        },
      }
      const feed = popularFeedSelector(state)
    
      should(feed).deepEqual([
        { uri: 1, key: 'a' },
        { uri: 2, key: 'b' },
      ])
    })
  })
})
