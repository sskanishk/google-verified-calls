import '../styles/output.css'
import CallReachability from './CallReachability'
import CallRegister from './CallRegister'

function Playground() {
  return (
    <div className=" bg-gray-50">
      
      <div className="xl:container xl:mx-auto px-5 py-4">
        {/* <h1 className="text-3xl">Google Verified Calls Playground</h1> */}
        <div className="px-10 py-5 bg-gray-100 rounded-md shadow-sm">
          <div className="sm:text-center lg:text-left py-5">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Google Verified Calls</span>
              <span className="block text-indigo-600 xl:inline">   Playground</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">          
          <CallReachability />
          <CallRegister />
        </div>

      </div>
    </div>
  )
}

export default Playground