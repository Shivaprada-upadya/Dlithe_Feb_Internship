import React from 'react';

const AppStructure = () => {
  return (
    <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-center">App Structure</h3>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="border-2 border-black p-4 w-48 h-32 flex items-center justify-center">
          <div className="text-center font-medium">Main</div>
        </div>
        
        <div className="relative border-2 border-black p-4 w-48 h-32">
          <div className="text-center font-medium">Register</div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-1/4 w-24 h-8 border-2 border-black rounded-full flex items-center justify-center"></div>
        </div>
        
        <div className="border-2 border-black p-4 w-48 h-32">
          <div className="text-center font-medium">Services</div>
        </div>
        
        <div className="border-2 border-black p-4 w-32 h-24 mt-8">
          <div className="text-center font-medium">Profile</div>
        </div>
        
        <div className="border-2 border-black p-4 w-48 h-32 mt-8">
          <div className="text-center font-medium">Transaction</div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <div className="text-sm text-gray-600">
          <div className="flex items-center">
            <span className="mr-2">👆</span>
            <span>Bank App</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStructure;