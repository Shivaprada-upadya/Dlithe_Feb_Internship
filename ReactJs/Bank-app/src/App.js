import React, { useState } from 'react';
import Main from './components/Main';
import Register from './components/Register';
import Services from './components/Services';
import Profile from './components/Profile';
import Transaction from './components/Transaction';
import Navigation from './components/Navigation';
import AppStructure from './components/AppStructure';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    accountNumber: "XXXX-XXXX-1234",
    balance: 12345.67,
    transactions: [
      { id: 1, date: "2025-03-05", recipient: "Jane Smith", amount: -250.00, description: "Rent payment" },
      { id: 2, date: "2025-03-04", recipient: "Coffee Shop", amount: -4.50, description: "Morning coffee" },
      { id: 3, date: "2025-03-01", recipient: "Acme Inc", amount: 1200.00, description: "Salary deposit" },
      { id: 4, date: "2025-02-28", recipient: "Grocery Store", amount: -85.75, description: "Weekly groceries" },
    ],
    cards: [
      { id: 1, type: "Debit", number: "**** **** **** 5678", expires: "09/27" },
      { id: 2, type: "Credit", number: "**** **** **** 9012", expires: "11/26" }
    ]
  });

  // Navigation handler
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Register handler
  const handleRegister = () => {
    setIsRegistered(true);
    navigateTo('profile');
  };
  
  // Transaction handler
  const handleTransaction = (formData) => {
    const amount = parseFloat(formData.amount);
    const recipient = formData.recipient;
    const description = formData.description;
    
    if (amount && recipient) {
      // Create new transaction
      const newTransaction = {
        id: user.transactions.length + 1,
        date: formData.date || new Date().toISOString().split('T')[0],
        recipient: recipient,
        amount: -amount, // Negative because it's money going out
        description: description
      };
      
      // Update user state with new transaction and updated balance
      setUser({
        ...user,
        balance: user.balance - amount,
        transactions: [newTransaction, ...user.transactions]
      });
      
      // Show success message and go back to profile
      alert("Transaction completed successfully!");
      navigateTo('profile');
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-10">Bank App</h1>
      
      <div className="w-full max-w-5xl">
        <Navigation 
          currentPage={currentPage} 
          navigateTo={navigateTo} 
          isRegistered={isRegistered} 
        />

        <div className="bg-white p-6 rounded-lg shadow-md min-h-96">
          {currentPage === 'main' && (
            <Main 
              navigateTo={navigateTo} 
              isRegistered={isRegistered} 
            />
          )}

          {currentPage === 'register' && (
            <Register 
              handleRegister={handleRegister} 
            />
          )}

          {currentPage === 'services' && (
            <Services 
              navigateTo={navigateTo} 
            />
          )}

          {currentPage === 'profile' && (
            <Profile 
              user={user} 
              navigateTo={navigateTo} 
            />
          )}

          {currentPage === 'transaction' && (
            <Transaction 
              user={user} 
              navigateTo={navigateTo} 
              handleTransaction={handleTransaction} 
            />
          )}
        </div>

        <AppStructure />
      </div>
    </div>
  );
}

export default App;