import Input from "./common/Input"
import useStore from "../store"
import { GCP_AccessToken } from "../services/Authentication"
import { RegisterVerifiedCall } from "../services/GoogleVerifiedCallsAPI"


function CallRegister() {
  
  const addBrandNumber = useStore(state => state.callRegister.addBrandPhoneNumber)
  const inputBrandPhone = (value) => { 
    addBrandNumber(value)
  }
  const brandPhone = useStore(state => state.callRegister.brandPhoneNumber)


  const addTargetNumber = useStore(state => state.callRegister.addTargetPhoneNumber)
  const inputTargetPhone = (value) => {
    addTargetNumber(value)
  }
  const targetPhone = useStore(state => state.callRegister.targetPhoneNumber)


  const addCallReason = useStore(state => state.callRegister.addCallReason)
  const inputCallReason = (value) => {
    addCallReason(value)
  }
  const callReason = useStore(state => state.callRegister.callReason)


  const registerCall = async () => {
    const accessToken = await GCP_AccessToken()

    const dataToSend = {
      BRAND_PHONE_NUMBER: brandPhone,
      RECIPIENT_PHONE_NUMBER: targetPhone,
      CALL_REASON: callReason || ""
    }

    if(accessToken.token) {

      const callRegisterResp = await RegisterVerifiedCall(dataToSend, accessToken.access_token)
      const callRegister = await callRegisterResp.status === 200 ? true : false 
      
      if(callRegister) {
        alert("Call is successfully registered")
      }
      else{
        alert(callRegisterResp.message)
      }

    }
  }

  

  return (
    <div className="box-content my-8">
      <h3 className="text-2xl mb-4 underline">Register Call</h3>
      <Input 
        id="register-call-brand-number"
        placeholder="Example: +919689565691" 
        label="Enter brand phone number." 
        onChange={inputBrandPhone}
      />
      <Input 
        id="register-call-target-number"
        placeholder="Example: +919689565691" 
        label="Enter target device phone number." 
        onChange={inputTargetPhone}
      />
      <Input 
        id="register-call-call-reason"
        placeholder="ICIC credit card realted" 
        label="Enter target device phone number." 
        onChange={inputCallReason}
      />
      <button 
        type="submit" 
        onClick={registerCall}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Register Call
      </button>
    </div>
  )
}

export default CallRegister