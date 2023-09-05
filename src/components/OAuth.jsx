import React from 'react';
import {FcGoogle} from 'react-icons/fc'

function OAuth() {
  return (
    
    <button
    type="submit"
    className="w-full px-7 py-3 bg-red-600 text-white text-l uppercase font-medium rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800 flex items-center justify-center"
  >
    <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
    Continue with google
  </button>
  
  )
}

export default OAuth
