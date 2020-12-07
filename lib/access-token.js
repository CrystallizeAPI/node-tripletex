const fetch = require('cross-fetch')
let date, access_token;

async function tripletexAccessToken ({ client }) {
  try {
    const {
      baseUrl,
      consumerToken,
      employeeToken
    } = client.config
    const newDate = new Date()

    if(!access_token || newDate.toISOString() >= date.toISOString()){
      date = new Date();
      date.setDate(date.getDate() + 1);

      const response = await fetch(`${baseUrl}/token/session/:create?consumerToken=${consumerToken}&employeeToken=${employeeToken}&expirationDate=${date.toISOString()}`, {
        method: 'PUT'
      })
      jsonResponse = await response.json();
      access_token = jsonResponse.value.token
    }
    
    return Promise.resolve({
      success:true,
      access_token,
      date,
      newDate
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = tripletexAccessToken
