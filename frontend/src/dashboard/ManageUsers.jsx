import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isButtonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/rac/user/getusers");
        setUsers(response.data.user);
        console.log(response.data.user);
      } catch (err) {
        console.log('Error fetching data', err);
      }
    };

    fetchUsers();
  }, []);

  let i = 1;

  const handleEdit = (userId) => {
    // Implement the edit functionality here
    console.log(`Editing 'user' with ID ${userId}`);
  };

  const handleDelete = async (userId) => {
    // Implement the delete functionality here
    try {
      // Make an API request to delete the user with the specified ID
      await axios.delete(`http://localhost:4000/rac/user/deleteuser/${userId}`);
      // Update the state to reflect the deleted user
      setUsers((prevUsers) => prevUsers.filter(user => user._id !== userId));
      console.log(`Deleted user with ID ${userId}`);
      alert(`Deleted user with ID ${userId}`);

    } catch (err) {
      console.log('Error deleting user', err);
    }
  };

  // Event handler for the button click
  const handleButtonClick = () => {
    // Set the state to true when the button is clicked
    setButtonClicked(true);
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

        {isButtonClicked && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md">
              <form>
                <label className="block mb-4">
                  Username:
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-4">
                  Email:
                  <input
                    type="email"
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="font-poppins text-[#000000] overflow-x-auto">
          <table className="font-poppins text-[#000000] min-w-full border rounded table-auto">
            <thead>
              <tr className="font-poppins text-[#000000] bg-gray-200">
                <th className="font-poppins text-[#000000] border p-2">ID</th>
                <th className="font-poppins text-[#000000] border p-2">Name</th>
                <th className="font-poppins text-[#000000] border p-2">Email</th>
                <th className="font-poppins text-[#000000] border p-2">Role</th>
                <th className="font-poppins text-[#000000] border p-2">Actions</th>
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
                    <div className="space-x-4">
                      <button onClick={() => handleEdit(user._id)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(user._id)}>
                        <FaTrash className='cursor-pointer text-[#000000]' />
                      </button>
                    </div>
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

export default ManageUsers;
