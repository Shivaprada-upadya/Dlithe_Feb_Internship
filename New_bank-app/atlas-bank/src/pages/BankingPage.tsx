import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import '../styles/BankingPage.css';

const BankingPage = () => {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', amount: 500, date: '2023-05-15', description: 'Initial deposit' },
    { id: 2, type: 'withdrawal', amount: 50, date: '2023-05-16', description: 'ATM withdrawal' },
    { id: 3, type: 'deposit', amount: 200, date: '2023-05-20', description: 'Salary' },
  ]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (!description) {
      setError('Please enter a description');
      return;
    }

    const numAmount = Number(amount);

    if (transactionType === 'withdrawal' && numAmount > balance) {
      setError('Insufficient funds');
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      type: transactionType,
      amount: numAmount,
      date: new Date().toISOString().split('T')[0],
      description
    };

    setTransactions([...transactions, newTransaction]);
    
    if (transactionType === 'deposit') {
      setBalance(balance + numAmount);
    } else {
      setBalance(balance - numAmount);
    }

    // Reset form
    setAmount('');
    setDescription('');
    setError('');
  };

  return (
    <PageTransition>
      <div className="banking-page">
        <div className="container">
          <div className="account-summary">
            <h1>Your Account</h1>
            <div className="balance-card">
              <h2>Current Balance</h2>
              <p className="balance">${balance.toFixed(2)}</p>
            </div>
            
            <div className="transaction-form-container">
              <h2>New Transaction</h2>
              {error && <div className="error-message">{error}</div>}
              <form onSubmit={handleSubmit} className="transaction-form">
                <div className="form-group">
                  <label htmlFor="transaction-type">Transaction Type</label>
                  <select 
                    id="transaction-type" 
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                  >
                    <option value="deposit">Deposit</option>
                    <option value="withdrawal">Withdrawal</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input 
                    type="number" 
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input 
                    type="text" 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit Transaction</button>
              </form>
            </div>
          </div>
          
          <div className="transaction-history">
            <h2>Transaction History</h2>
            {transactions.length === 0 ? (
              <p>No transactions yet</p>
            ) : (
              <div className="transactions-list">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className={`transaction-item ${transaction.type}`}>
                    <div className="transaction-info">
                      <p className="transaction-description">{transaction.description}</p>
                      <p className="transaction-date">{transaction.date}</p>
                    </div>
                    <p className="transaction-amount">
                      {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="view-all-link">
              <Link to="/transactions">View All Transactions</Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BankingPage;
