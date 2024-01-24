import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
	const [userName, setUsername] = useState('');
	const [userEmail, setEmail] = useState('');
	const [alertMessage, setAlertMessage] = useState(null);

	async function submit(e) {
		e.preventDefault();

		try {
			const response = await axios.post('http://localhost:4000/rac/user/forgotpassword', {
				userName,
				userEmail,
			});

			if (response.data.success) {
				// If success is true, show a success message
				setAlertMessage({ type: 'success', message: 'Email sent successfully' });
			} else {
				// If success is false, show an error message
				setAlertMessage({ type: 'error', message: response.data.message });
			}
		} catch (error) {
			console.error('Error sending email:', error);
			setAlertMessage({ type: 'error', message: 'Error sending email' });
		}
	}

	const resetAlertMessage = () => {
		// Function to reset alert message
		setAlertMessage(null);
	};

	return (
		<div className="font-poppins min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div className="font-poppins relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="font-poppins absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="font-poppins relative px-15 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 lg:pb-10 lg:pt-15">
					<div className="font-poppins max-w-md mx-auto">
						<div>
							<h1 className="font-poppins text-2xl font-semibold">Forgot Password</h1>
						</div>
						<div className="font-poppins divide-y divide-gray-200">
							<form
								onSubmit={submit}
								className="font-poppins py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
							>
								<div className="font-poppins relative">
									<input
										id="username"
										name="username"
										type="text"
										value={userName}
										onChange={(e) => setUsername(e.target.value)}
										className="font-poppins peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
										placeholder="Username"
									/>
								</div>
								<div className="font-poppins relative">
									<input
										id="email"
										name="email"
										type="email"
										value={userEmail}
										onChange={(e) => setEmail(e.target.value)}
										className="font-poppins peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
										placeholder="Email address"
									/>
								</div>
								<div className="font-poppins flex justify-center items-center h-full">
									<button className="font-poppins bg-blue-500 text-white rounded-md px-2 py-1" type="submit">
										Send Email
									</button>
								</div>
							</form>
							{alertMessage && (
								<div className={`alert-${alertMessage.type} mt-4 p-2 border border-${alertMessage.type}-500 rounded`}>
									<p>{alertMessage.message}</p>
									<button className={`text-${alertMessage.type}-500`} onClick={resetAlertMessage}>
										Close
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
