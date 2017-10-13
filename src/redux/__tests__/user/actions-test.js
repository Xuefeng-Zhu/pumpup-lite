import should from 'should'
import sinon from 'sinon'
import UserActions from '../../user/actions'
// import api from '@lib/api'

describe('user actions', () => {


  describe('getUser', () => {

    it('dispatch GET_USER action', (done) => {
      const dispatch = (action) => {
        action.should.have.property('type', 'GET_USER')
        done()
      }

      UserActions.getUser()(dispatch)
    })
  })
})
