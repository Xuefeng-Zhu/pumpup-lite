import should from 'should'
import sinon from 'sinon'
import UserActions from '@redux/feed/actions'
import api from '@lib/api'

describe('feed actions', () => {


  describe('getProfileFeed', () => {

    it('dispatch GET_USER action', (done) => {
      api.getProfileFeed = sinon.stub().returns(new Promise((resolve) => { resolve({ data: 'test' }) }))
      const dispatch = (action) => {
        should(action).have.property('type', 'GET_PROFILE_FEED')
        should(action).have.property('data', 'test')
        done()
      }

      UserActions.getProfileFeed()(dispatch)
    })
  })

  describe('getPopularFeed', () => {
    
    it('dispatch GET_USER action', (done) => {
      api.getPopularFeed = sinon.stub().returns(new Promise((resolve) => { resolve({ data: 'test' }) }))
      const dispatch = (action) => {
        should(action).have.property('type', 'GET_POPULAR_FEED')
        should(action).have.property('data', 'test')
        done()
      }

      UserActions.getPopularFeed()(dispatch)
    })
  })
})
