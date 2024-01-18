import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

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
  let i=1;

  const handleEdit = (userId) => {
    // Implement the edit functionality here
    console.log(`Editing user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    // Implement the delete functionality here
    console.log(`Deleting user with ID ${userId}`);
  };

  return (
    <>
      <div className="font-poppins text-black container mx-auto my-8">
        <h2 className="font-poppins text-black text-3xl font-bold mb-4 text-center">Manage Users</h2>
        <div className="font-poppins text-black overflow-x-auto">
          <table className="font-poppins text-black min-w-full border rounded">
            <thead>
              <tr className="font-poppins text-black bg-gray-200">
                <th className="font-poppins text-black border p-2">ID</th>
                <th className="font-poppins text-black border p-2">Name</th>
                <th className="font-poppins text-black border p-2">Email</th>
                <th className="font-poppins text-black border p-2">Role</th>
                <th className="font-poppins text-black border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                
              users.map((user) => (
                <tr key={user._id} className="font-poppins text-black hover:bg-gray-100">
                  <td className="font-poppins text-black border p-2">{i++}</td>
                  <td className="font-poppins text-black border p-2">{user.userName}</td>
                  <td className="font-poppins text-black border p-2">{user.userEmail}</td>
                  <td className="font-poppins text-black border p-2">{user.role}</td>
                  <td className="font-poppins text-black border p-2">
                    <td> <FaEdit/> </td>
                    <td> <FaTrash className='cursor-pointer text-red' /> </td>
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

export default ManageUsers;
