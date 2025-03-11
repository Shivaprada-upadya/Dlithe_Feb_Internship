import React, { useState } from 'react';

const Transaction = ({ user, navigateTo, handleTransaction }) => {
  const [formData, setFormData] = useState({
    transferType: 'domestic',
    recipient: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTransaction(formData);
  };

  const selectRecipient = (recipient) => {
    setFormData({
      ...formData,
      recipient
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Money Transfer</h2>
      
      {/* Balance Card */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-600">Available Balance</span>
          <div className="font-bold text-xl">${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>
        <div className="text-sm text-gray-600">
          Account: {user.accountNumber}
        </div>
      </div>
      
      {/* Transaction Form */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="transferType">Transfer Type</label>
            <select 
              name="transferType" 
              id="transferType" 
              className="w-full p-2 border rounded-lg bg-white"
              value={formData.transferType}
              onChange={handleChange}
            >
              <option value="domestic">Domestic Transfer</option>
              <option value="international">International Transfer</option>
              <option value="own">Transfer to Own Account</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="recipient">Recipient</label>
            <input 
              type="text" 
              name="recipient" 
              id="recipient" 
              className="w-full p-2 border rounded-lg" 
              placeholder="Recipient name or account number" 
              required 
              value={formData.recipient}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="amount">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-2">$</span>
              <input 
                type="number" 
                name="amount" 
                id="amount" 
                className="w-full p-2 pl-8 border rounded-lg" 
                min="0.01" 
                step="0.01" 
                max={user.balance} 
                required 
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Maximum transfer amount: ${user.balance.toFixed(2)}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="date">Transfer Date</label>
            <input 
              type="date" 
              name="date" 
              id="date" 
              className="w-full p-2 border rounded-lg" 
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
            <textarea 
              name="description" 
              id="description" 
              className="w-full p-2 border rounded-lg" 
              rows="2" 
              placeholder="What's this transfer for?"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="pt-4">
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full md:w-1/2"
              >
                Send Money
              </button>
              <button 
                type="button"
                onClick={() => navigateTo('profile')} 
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 w-full md:w-1/2"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      
      {/* Recent Recipients */}
      <div className="mt-8">
        <h3 className="font-medium mb-3">Recent Recipients</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {user.transactions
            .filter((t, i, arr) => arr.findIndex(x => x.recipient === t.recipient) === i)
            .slice(0, 4)
            .map((transaction, index) => (
              <div 
                key={index} 
                className="p-3 border rounded-lg text-center hover:bg-gray-50 cursor-pointer"
                onClick={() => selectRecipient(transaction.recipient)}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600 font-bold">
                  {transaction.recipient.charAt(0)}
                </div>
                <div className="text-sm font-medium truncate">{transaction.recipient}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;