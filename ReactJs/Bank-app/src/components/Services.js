import React from 'react';

const Services = ({ navigateTo }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div 
          className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer" 
          onClick={() => navigateTo('transaction')}
        >
          <h3 className="font-semibold text-lg mb-2">Money Transfer</h3>
          <p>Transfer money securely to any account</p>
        </div>
        <div className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer">
          <h3 className="font-semibold text-lg mb-2">Bill Payments</h3>
          <p>Pay your bills quickly and easily</p>
        </div>
        <div className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer">
          <h3 className="font-semibold text-lg mb-2">Loans</h3>
          <p>Apply for personal and business loans</p>
        </div>
        <div className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer">
          <h3 className="font-semibold text-lg mb-2">Investments</h3>
          <p>Grow your wealth with our investment options</p>
        </div>
      </div>
    </div>
  );
};

export default Services;