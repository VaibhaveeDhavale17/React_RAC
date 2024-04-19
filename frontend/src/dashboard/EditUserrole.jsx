import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserrole = ({ userId, onCancel, onUpdate }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    role: 'user',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/rac/user/${userId}`);
        const user = response.data.user;

        // Set the form data with the user details
        setFormData({
          userName: user.userName,
          userEmail: user.userEmail,
          userPassword: '', // Hiding password
          role: user.role,
        });
      } catch (err) {
        console.error('Error fetching user data for edit:', err);
      }
    };

    fetchUser();
  }, [userId]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formDataToSend = {
      role: formData.role, // Only updating the role
    };

    try {
      // Update existing user's role
      await axios.put(`http://localhost:4000/rac/user/${userId}`, formDataToSend);

      // Notify the parent component about the update
      onUpdate();
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Error updating user role. Please try again.');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <form className="bg-white p-8 rounded-md shadow-md" onSubmit={handleUpdate}>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <label className="block mb-4">
          Username:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            readOnly // Make it read-only
            className="border border-gray-300 p-2 w-full"
          />
        </label>
        <label className="block mb-4">
          Email:
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            readOnly // Make it read-only
            className="border border-gray-300 p-2 w-full"
          />
        </label>
        {/* Password field is not displayed */}
        <label className="block mb-4">
          Role:
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="border border-gray-300 p-2 w-full"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 mb-4 rounded-md">
          Update Role
        </button>
      </form>
    </div>
  );
};

export default EditUserrole;
