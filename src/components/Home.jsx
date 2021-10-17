import '../styles/output.css'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-white">Namaste(hello) World 👋</h1>
      <p className="text-2xl text-white mt-3">Googles' Verified Calls Playground </p>
      <p className="text-gray-400 mt-5 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
      <Link to='/playground'>
        <button className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600 transition duration-500 ease-in-out">
          Lets' Continue
        </button>
      </Link>
      
    </div>
  )
}

export default Home