import axios from 'axios'

async function CheckVcallDeviceReachable(props, ACCESS_TOKEN) {
  try {

    const data = {
      deviceNumber: props.targetPhoneNumber
    }

    const config = {
      method: 'post',
      url: 'https://businesscalls.googleapis.com/v1:checkVcallDeviceReachable',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      data : data
    }

    const response = await axios(config)
    const deivceReachableResp = await response.data
    return deivceReachableResp

  } catch (error) {
    console.log('ERR in device reachablilty')
    return error.response
  }
}

async function RegisterVerifiedCall(props, ACCESS_TOKEN) {
  try {
    
    var data = {
      brandNumber: props.BRAND_PHONE_NUMBER,
      deviceNumber: props.RECIPIENT_PHONE_NUMBER,
      callReason: props.CALL_REASON
    }

    var config = {
      method: 'post',
      url: 'https://businesscalls.googleapis.com/v1:sendVcallVerification',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      data : data
    };
  
    const response = await axios(config)
    const dataResp = {
      status: await response.status,
      statusText: await response.statusText,
      data: data
    }
    return dataResp
    
  } catch (error) {

    return error.response.data.error
  
  }
}

export {
  CheckVcallDeviceReachable, 
  RegisterVerifiedCall
}