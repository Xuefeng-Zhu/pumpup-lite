import axios from 'axios'

const SESSIONTOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
const VERSION = '5.0.5'

function getUser() {
  return axios.post('https://api.pumpup.com/1/classes/User/318381', {
    _version: VERSION,
    _SessionToken: SESSIONTOKEN,
    _method: 'GET',
  })
}


export default {
  getUser,
}
