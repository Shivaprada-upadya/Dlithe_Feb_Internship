import React from 'react';

const Navigation = ({ currentPage, navigateTo, isRegistered }) => {
  return (
    <nav className="flex justify-center gap-4 mb-8">
      <button 
        onClick={() => navigateTo('main')}
        className={`px-4 py-2 rounded-lg ${currentPage === 'main' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        Main
      </button>
      <button 
        onClick={() => navigateTo('register')}
        className={`px-4 py-2 rounded-lg ${currentPage === 'register' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        Register
      </button>
      <button 
        onClick={() => navigateTo('services')}
        className={`px-4 py-2 rounded-lg ${currentPage === 'services' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        disabled={!isRegistered}
      >
        Services
      </button>
      {isRegistered && (
        <>
          <button 
            onClick={() => navigateTo('profile')}
            className={`px-4 py-2 rounded-lg ${currentPage === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Profile
          </button>
          <button 
            onClick={() => navigateTo('transaction')}
            className={`px-4 py-2 rounded-lg ${currentPage === 'transaction' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Transaction
          </button>
        </>
      )}
    </nav>
  );
};

export default Navigation;