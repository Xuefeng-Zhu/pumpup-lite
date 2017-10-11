/**
 * Libarary used to fetch data from pumpup api endpoint
 */

import axios from 'axios'

export default {
  getUser,
  getProfileFeed,
  getPopularFeed
}

const SESSIONTOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
const VERSION = '5.0.5'

const axiosInstance = axios.create({
  baseURL: 'https://api.pumpup.com/1/',
  data: {
    _version: VERSION,
    _SessionToken: SESSIONTOKEN,
  },
})

function getUser() {
  return axiosInstance.post('classes/User/318381', {
    _method: 'GET',
  })
}

function getProfileFeed() {
  return axiosInstance.post('functions/feed/profile/load-batch', {
    _method: 'POST',
    isThumbnailsOnly: true,
    limit: 5,
    userId: 2707798,
  })
}

function getPopularFeed() {
  return axiosInstance.post('functions/feed/popular/load-batch', {
    _method: 'POST',
    isThumbnailsOnly: true,
    limit: 18,
  })
}
