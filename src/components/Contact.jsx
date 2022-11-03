import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center ' >
    <form method='POST' action="https://getform.io/f/b5b123ca-00d1-4549-be96-aa9ce6bed38b" className='flex flex-col max-w-[600px] w-full' >
        <div className='pb-8' >
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300' >Contact</p>
            <p className='text-gray-300 py-4' >Submit the form bellow or shoot me an email - carlos.pegi.01@gmail.com</p>
        </div>
        <input className='p-2 bg-[#ccd6f6] outline-none text-lg' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] outline-none text-lg' type="text" placeholder='Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6] outline-none text-lg' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-500' >Let's Collaborate</button>
    </form>
      
    </div>
  )
}

export default Contact
