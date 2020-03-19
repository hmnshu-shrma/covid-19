import Axios from 'axios'
const url = process.env.API_URL

export const getAllCountries = async() => {
  const responseData = await Axios.get(`${url}all`)
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      return error
    })
  return responseData
}
export const timeConverter = UNIXtimestamp => {
  return new Date(UNIXtimestamp).toLocaleDateString()
}
