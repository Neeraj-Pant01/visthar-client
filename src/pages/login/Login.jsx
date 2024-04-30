import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const [email, setEmail] = useState(true)
    
    const navigate = useNavigate();

  return (
    <div className='flex items-center bg-gradient-to-b from-[black] to-[rgba(0,0,0,0.7)] justify-center min-h-screen'>
      <div className='flex h-[700px] w-[600px] flex-col rounded-lg shadow-2xl py-6 px-10 bg-[white]'>
        <span className='text-center my-10 text-xl'>Login</span>
        <form className='flex items-center justify-center flex-col gap-5'>
            {
                email ?
                <div className='flex w-[80%] flex-col'>
                <b className='text-[grey]'>Email</b>
                <input type='text' className='border outline-none rounded-lg py-3 px-3' placeholder='enter username' />
            </div>
            :
            <div className='flex flex-col w-[80%]'>
                <b className='text-[grey]'>Number</b>
                <input type='text' className='border outline-none rounded-lg py-3 px-3' placeholder='enter username' />
            </div>
            
            }
            <div className='flex items-center w-[80%] text-[lightgreen]'>
                {
                    email ?
                    <span className='cursor-pointer font-semibold' onClick={()=>setEmail(false)}>Use Mobile NUmber instead</span>
                    :
                    <span className='cursor-pointer font-semibold' onClick={()=>setEmail(true)}>Use Email ID</span>
                }
            </div>

            <div className='flex flex-col w-[80%]'>
                <b className='text-[grey]'>Password</b>
                <input type='password' className='border outline-none rounded-lg py-3 px-3' placeholder='enter username' />
            </div>
            <button className='py-2 px-4 rounded-lg w-[40%] shadow-md'>Login</button>

            <div className='flex items-center justify-end w-[80%] gap-2 text-xl text-[purple] underline'>
                <span className='flex items-center gap-2 cursor-pointer' onClick={()=>navigate('/')}>skip <AiOutlineArrowRight /></span>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
