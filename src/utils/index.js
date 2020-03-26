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

export const getEachCountryData = async args => {
  const responseData = await Axios.get(`${url}countries`)
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      return error
    })
  return responseData
}

export const getSingleCountry = async args => {
  const responseData = await Axios.get(`${url}countries/${args}`)
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      return error
    })
  return responseData
}

export const timeConverter = UNIXtimestamp => {
  if (!UNIXtimestamp) return 'N/A'
  var dObj = new Date(UNIXtimestamp)
  var date = dObj.toLocaleString()
  return date
}
