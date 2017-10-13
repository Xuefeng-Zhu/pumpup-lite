import should from 'should'
import sinon from 'sinon'
import UserActions from '@redux/user/actions'
import api from '@lib/api'

describe('user actions', () => {


  describe('getUser', () => {

    it('dispatch GET_USER action', (done) => {
      api.getUser = sinon.stub().returns(new Promise((resolve) => { resolve({ data: 'test' }) }))

      const dispatch = (action) => {
        should(action).have.property('type', 'GET_USER')
        should(action).have.property('data', 'test')
        done()
      }

      UserActions.getUser()(dispatch)
    })
  })
})
