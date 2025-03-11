import React from 'react';

const Profile = ({ user, navigateTo }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Profile</h2>
      
      {/* Account Overview Card */}
      <div className="bg-blue-600 text-white p-6 rounded-lg mb-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Account Overview</h3>
          <span className="text-sm">{user.accountNumber}</span>
        </div>
        <div className="mb-2">
          <span className="text-sm opacity-80">Available Balance</span>
          <div className="text-2xl font-bold">${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>{user.name}</span>
          <button 
            onClick={() => navigateTo('transaction')}
            className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-100"
          >
            New Transaction
          </button>
        </div>
      </div>
      
      {/* User Details Card */}
      <div className="bg-white border rounded-lg p-4 mb-6 shadow-sm">
        <h3 className="font-semibold mb-3 text-lg">Personal Information</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Full Name:</span>
            <span className="font-medium">{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium">{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Account Number:</span>
            <span className="font-medium">{user.accountNumber}</span>
          </div>
        </div>
      </div>
      
      {/* Payment Cards */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-lg">Your Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {user.cards.map(card => (
            <div key={card.id} className={`p-4 rounded-lg shadow-sm ${card.type === 'Credit' ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : 'bg-gradient-to-r from-blue-500 to-teal-400'} text-white`}>
              <div className="flex justify-between items-center mb-6">
                <span className="font-medium">{card.type} Card</span>
                <span className="text-xs">Expires: {card.expires}</span>
              </div>
              <div className="mb-4 font-mono">{card.number}</div>
              <div className="text-sm">{user.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">Recent Transactions</h3>
          <button className="text-blue-600 text-sm">View All</button>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Description</th>
                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {user.transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{transaction.date}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{transaction.recipient}</div>
                    <div className="text-xs text-gray-500">{transaction.description}</div>
                  </td>
                  <td className={`px-4 py-3 text-right font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount >= 0 ? '+' : ''}
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;