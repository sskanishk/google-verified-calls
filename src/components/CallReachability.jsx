import { GCP_AccessToken } from "../services/Authentication"
import { CheckVcallDeviceReachable } from "../services/GoogleVerifiedCallsAPI"
import useStore from "../store"
import Input from "./common/Input"


function CallReachability() {

  const addValue = useStore(state => state.reachability.addTargetPhoneNumber)
  const inputNumber = (value) => {
    addValue(value)
  }
  const phoneNumber = useStore(state => state.reachability.targetPhoneNumber)


  const checkReachabilityApiCall = async () => {
    const accessToken = await GCP_AccessToken()
    const dataToSend = {
      targetPhoneNumber: phoneNumber
    }
    if(accessToken.token) {
      const deviceReachabilityResp = await CheckVcallDeviceReachable(dataToSend, accessToken.access_token)

      if(["UNREACHABLE", "REACHABLE"].includes(deviceReachabilityResp?.reachability)) {
        alert( " 😎 😎 🥳  " + deviceReachabilityResp.reachability)
      } 
      else {
        alert("♨️ ERROR: " + deviceReachabilityResp.data.error.message)
      }
     
    }
  }

  return (
    <div className="box-content my-8">
      <h3 className="text-2xl mb-4 underline">Call Reachability</h3>
      <Input 
        id="reachability"
        placeholder="Example: +919689565691" 
        label="Enter target device phone number." 
        onChange={inputNumber}
      />
      <button 
        type="submit" 
        onClick={checkReachabilityApiCall}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
          Check Reachability
      </button>

    </div>
  )
}

export default CallReachability