import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Login from '../Components/Login'

const Signup = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function submit(e){
		e.preventDefault();

		try{
			await axios.post("http://localhost:5173/signup", {
				email,password
			})
		}catch(e){
			console.log(e);
		}
	}
  return (
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-15 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 lg:pb-10 lg:pt-15">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Sign Up Form</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={submit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
							<input id="name" name="name" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
							
						</div>

						<div className="relative">
							<input id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>

                        <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Signup as Admin</label>
</div>

                        <p className='text-sm'>If you already have an account. Please <Link to='/' className="text-blue-700 underline">Login</Link> Here</p>
						<div className="flex justify-center items-center h-full">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Sign up</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Signup