import should from 'should'
import api from '@lib/api'

describe('api', () => {

  it('should fetch user profile', (done) => {
    api.getUser()
      .then(({ data }) => {
        should(data).have.property('name', 'pumpup')
        should(data).have.property('bio')
        should(data).have.property('profileImage')

        done()
      })
  })


  it('should fetch profile feed', (done) => {
    api.getProfileFeed()
      .then(({ data }) => {
        const posts = data.result.posts

        should(posts).be.instanceof(Array).and.have.lengthOf(5)
        should(posts[0]).have.property('thumbnail')
        should(posts[0]).have.property('objectId')

        done()
      })
  })


  it('should fetch popular feed', (done) => {
    api.getPopularFeed()
      .then(({ data }) => {
        const posts = data.result.posts

        should(posts).be.instanceof(Array).and.have.lengthOf(18)
        should(posts[0]).have.property('thumbnail')
        should(posts[0]).have.property('objectId')

        done()
      })
  })
})
