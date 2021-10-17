import create from 'zustand'

const useStore = create((set) => ({
  
  reachability: {
    targetPhoneNumber: "",
    addTargetPhoneNumber: (phone) => 
      set((state) => ({ reachability: { ...state.reachability, targetPhoneNumber: phone } }))
  },

  callRegister: {
    targetPhoneNumber: "",
    brandPhoneNumber: "",
    callReason: "",
    addTargetPhoneNumber: (targetPhone) => 
      set((state) => ({ callRegister: { ...state.callRegister, targetPhoneNumber: targetPhone } })),
    addBrandPhoneNumber: (brandPhone) => 
      set((state) => ({ callRegister: { ...state.callRegister, brandPhoneNumber: brandPhone } })),
    addCallReason: (reason) => 
      set((state) => ({ callRegister: { ...state.callRegister, callReason: reason } })),    
  }
}))

export default useStore