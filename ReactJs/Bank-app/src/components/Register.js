import React from 'react';

const Register = ({ handleRegister }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full p-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full p-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Confirm Password</label>
          <input type="password" className="w-full p-2 border rounded-lg" required />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 mt-6"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;