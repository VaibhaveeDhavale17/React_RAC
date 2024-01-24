import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

	const user = "abcc";
	const pass = "abcc";
	const navigate = useNavigate();
    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;

		if(form.email.value === user && form.password.value===pass){
			navigate("/dashboard");
			console.log("Login Successful");
		}
		else{
			alert("password incorrect")
			console.log("Login unsuccessful");
		}

	}

  return (
<div className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12 ml-auto">
	<div className="relative ml-auto py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-26 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 lg:pb-11">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Login Form</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

						<div className="relative">
							<input id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>

                        <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Login as Admin</label>
</div>

                        <p className='text-sm'>Are you a new User? Please <Link to='/signup' className="text-blue-700 underline">Signup</Link> Here</p>
						<p className='text-sm'><Link to='/signup' className="text-blue-700">Forget Password</Link></p>

						<div className="flex justify-center items-center h-full">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login