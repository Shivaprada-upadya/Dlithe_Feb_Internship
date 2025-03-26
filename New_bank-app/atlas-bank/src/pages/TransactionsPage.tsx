
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Search, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageTransition from '@/components/PageTransition';

// Sample transaction data
const transactions = [
  { 
    id: 1, 
    merchant: 'Starbucks', 
    date: '2023-06-15', 
    amount: -14.50, 
    type: 'expense',
    category: 'Food & Drink'
  },
  { 
    id: 2, 
    merchant: 'Amazon', 
    date: '2023-06-14', 
    amount: -67.99, 
    type: 'expense',
    category: 'Shopping'
  },
  { 
    id: 3, 
    merchant: 'Payroll', 
    date: '2023-06-10', 
    amount: 2450.00, 
    type: 'income',
    category: 'Income'
  },
  { 
    id: 4, 
    merchant: 'Netflix', 
    date: '2023-06-05', 
    amount: -13.99, 
    type: 'expense',
    category: 'Entertainment'
  },
  { 
    id: 5, 
    merchant: 'Uber', 
    date: '2023-06-03', 
    amount: -24.50, 
    type: 'expense',
    category: 'Transportation'
  },
  { 
    id: 6, 
    merchant: 'Transfer from Savings', 
    date: '2023-06-01', 
    amount: 500.00, 
    type: 'income',
    category: 'Transfer'
  },
];

// Sample chart data
const chartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'income' && transaction.type === 'income') ||
                      (activeTab === 'expenses' && transaction.type === 'expense');
    return matchesSearch && matchesTab;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 py-12 md:py-24">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Transactions</h1>
                <p className="text-muted-foreground">
                  Keep track of your financial activity and manage your spending.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            {/* Summary Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Current Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,456.78</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Updated 3 mins ago
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Income (This Month)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">$2,950.00</div>
                    <div className="ml-2 flex items-center text-green-500 text-xs">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      4.3%
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    vs. previous month
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Expenses (This Month)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">$1,256.22</div>
                    <div className="ml-2 flex items-center text-red-500 text-xs">
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                      2.1%
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    vs. previous month
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Spending Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Spending Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={chartData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="url(#colorGradient)" />
                        <defs>
                          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Transactions List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Transactions</h2>
                <div className="relative w-full max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    className="pl-9"
                    placeholder="Search transactions..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="income">Income</TabsTrigger>
                  <TabsTrigger value="expenses">Expenses</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="bg-white shadow-soft rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Merchant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredTransactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">{transaction.merchant}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-muted">
                              {transaction.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            {new Date(transaction.date).toLocaleDateString()}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-right font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 border-t border-border bg-muted/30 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredTransactions.length} of {transactions.length} transactions
                  </div>
                  <Button variant="outline" size="sm">
                    View All Transactions
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TransactionsPage;
