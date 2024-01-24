  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { FaEdit, FaTrash } from 'react-icons/fa';

  const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [selectedRole, setSelectedRole] = useState('user');
    const [isEditing, setIsEditing] = useState(false);
    const [editedUserId, setEditedUserId] = useState(null);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get("http://localhost:4000/rac/user/getusers");
          setUsers(response.data.user);
        } catch (err) {
          console.log('Error fetching data', err);
        }
      };

      fetchUsers();
    }, []);

    let i = 1;

    const handleButtonClick = () => {
      setFormVisible(true);
      setIsEditing(false);
      setEditedUserId(null);
    };

    const handleCloseClick = () => {
      setFormVisible(false);
      setIsEditing(false);
      setEditedUserId(null);
    };

    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;

      const formData = {
        userName: form.userName.value,
        userEmail: form.userEmail.value,
        userPassword: form.userPassword.value,
        role: selectedRole,
      };

      try {
        if (isEditing) {
          // Update existing user
          const response = await axios.put(`http://localhost:4000/rac/user/${editedUserId}`, formData);
          console.log('User updated successfully', response.data);
        } else {
          // Create new user
          const response = await axios.post("http://localhost:4000/rac/user/register", formData);
          console.log('User created successfully', response.data);
        }

        setFormVisible(false);
        setIsEditing(false);
        setEditedUserId(null);

        const updatedUsers = await axios.get("http://localhost:4000/rac/user/getusers");
        setUsers(updatedUsers.data.user);

        alert('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form', error);
        alert('Error submitting form. Please try again.');
      }
    };

  const handleEdit = (userId) => {
    console.log(`Editing user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    // Implement the delete functionality here
    console.log(`Deleting user with ID ${userId}`);
  };

    return (
      <>
        <div className="font-poppins text-[#000000] space-y-4 container mx-auto my-8">
          <button
            onClick={handleButtonClick}
            className="flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Add User
          </button>

          {isFormVisible && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <form className="bg-white p-8 rounded-md shadow-md" onSubmit={handleFormSubmit} ref={formRef}>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseClick}
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

                {/* Your form elements go here */}
                <label className="block mb-4">
                  Username:
                  <input
                    type="text"
                    name="userName"
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-4">
                  Email:
                  <input
                    type="email"
                    name="userEmail"
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-4">
                  Password:
                  <input
                    type="password"
                    name="userPassword"
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-4">
                  Role:
                  <select
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="border border-gray-300 p-2 w-full"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>

                {/* Add more form elements as needed */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 mb-4 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          )}

          <div className="font-poppins text-[#000000] overflow-x-auto">
            <table className="font-poppins text-[#000000] min-w-full border rounded">
              <thead>
                <tr className="font-poppins text-[#000000] bg-gray-200">
                  <th className="font-poppins text-[#000000] border p-2">ID</th>
                  <th className="font-poppins text-[#000000] border p-2">Name</th>
                  <th className="font-poppins text-[#000000] border p-2">Email</th>
                  <th className="font-poppins text-[#000000] border p-2">Role</th>
                  <th className="font-poppins text-[#000000] border p-2">Edit</th>
                  <th className="font-poppins text-[#000000] border p-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="font-poppins text-[#000000] hover:bg-gray-100">
                    <td className="font-poppins text-[#000000] border p-2">{i++}</td>
                    <td className="font-poppins text-[#000000] border p-2">{user.userName}</td>
                    <td className="font-poppins text-[#000000] border p-2">{user.userEmail}</td>
                    <td className="font-poppins text-[#000000] border p-2">{user.role}</td>
                    <td className="font-poppins text-[#000000] border p-2">
                      <button
                        onClick={() => handleEdit(user._id)}
                        className={`text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${isEditing ? 'bg-green-500' : ''}`}
                      >
                        <FaEdit className={`text-lg ${isEditing ? 'text-white' : 'text-green-500'}`} />
                      </button>
                    </td>
                    <td className="font-poppins text-[#000000] border p-2">
                      <button onClick={() => handleDelete(user._id)}>
                        <FaTrash className="cursor-pointer text-[#000000]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

export default ManageUsers