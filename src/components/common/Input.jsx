function Input(props) {

  return (

    <div className="mb-5 pt-0">

      <label 
        htmlFor={props.id} 
        className="block text-sm font-normal text-gray-500 mb-2"
      >{props.label}</label>

      <input 
        type="text" 
        id={props.id} 
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        className="px-3 py-3 max-w-sm placeholder-blueGray-300 text-blueGray-200 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />

    </div>

  )

}

export default Input