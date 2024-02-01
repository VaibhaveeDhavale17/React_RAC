import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const ResetPassword = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [alertMessage, setAlertMessage] = useState(null);
    const {token} = useParams()
    
	async function submit(e) {
		e.preventDefault();

		try {
			const response = await axios.put(`http://localhost:4000/rac/user/resetpassword/${token}`, {
				password,
				confirmPassword,
			});

			if (response.data.success) {
				// If success is true, show a success message
				setAlertMessage({ type: 'success', message: 'Password reset successfully' });
			} else {
				// If success is false, show an error message
				setAlertMessage({ type: 'error', message: response.data.message });
			}
		} catch (error) {
			console.error('Error resetting password:', error);
			setAlertMessage({ type: 'error', message: 'Error resetting password' });
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
							<h1 className="font-poppins text-2xl font-semibold">Reset Password</h1>
						</div>
						<div className="font-poppins divide-y divide-gray-200">
							<form
								onSubmit={submit}
								className="font-poppins py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
							>
								<div className="font-poppins relative">
									<input
										id="password"
										name="password"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="font-poppins peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
										placeholder="New Password"
									/>
								</div>
								<div className="font-poppins relative">
									<input
										id="confirmPassword"
										name="confirmPassword"
										type="password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										className="font-poppins peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
										placeholder="Confirm New Password"
									/>
								</div>
								<div className="font-poppins flex justify-center items-center h-full">
									<button className="font-poppins bg-blue-500 text-white rounded-md px-2 py-1" type="submit">
										Submit
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

export default ResetPassword;
