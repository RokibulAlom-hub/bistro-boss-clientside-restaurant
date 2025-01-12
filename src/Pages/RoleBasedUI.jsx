import React, { useState } from 'react';

const RoleBasedUI = () => {
  // Simulate user role, this could come from a user login or context
  const [role, setRole] = useState('user'); // 'user', 'admin', 'manager'

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Welcome to the Role-Based UI!</h1>

      {/* Button to change the role for testing */}
      <div className="mb-4">
        <button
          onClick={() => setRole('user')}
          className="mr-2 p-2 bg-blue-500 text-white rounded"
        >
          User
        </button>
        <button
          onClick={() => setRole('manager')}
          className="mr-2 p-2 bg-green-500 text-white rounded"
        >
          Manager
        </button>
        <button
          onClick={() => setRole('admin')}
          className="p-2 bg-red-500 text-white rounded"
        >
          Admin
        </button>
      </div>

      {/* Role-based content rendering */}
      {role === 'user' && (
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-semibold">User Dashboard</h2>
          <p>Welcome, User! You have basic access.</p>
        </div>
      )}

      {role === 'manager' && (
        <div className="bg-green-200 p-4 rounded">
          <h2 className="text-lg font-semibold">Manager Dashboard</h2>
          <p>Welcome, Manager! You can manage users and settings.</p>
        </div>
      )}

      {role === 'admin' && (
        <div className="bg-red-200 p-4 rounded">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          <p>Welcome, Admin! You have full access to all features.</p>
        </div>
      )}
    </div>
  );
};

export default RoleBasedUI;
