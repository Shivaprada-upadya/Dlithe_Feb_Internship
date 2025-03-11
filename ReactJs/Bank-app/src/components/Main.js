import React from 'react';

const Main = ({ navigateTo, isRegistered }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Bank App</h2>
      <p className="mb-6">Your trusted banking solution</p>
      <div className="flex gap-4 justify-center">
        <button 
          onClick={() => navigateTo('register')} 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </button>
        {isRegistered && (
          <button 
            onClick={() => navigateTo('profile')} 
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            View Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;