import React from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Bell, Settings } from 'lucide-react';

const activityData = [
  { name: 'Mon', today: 4000, bestResult: 2400 },
  { name: 'Tue', today: 3000, bestResult: 1398 },
  { name: 'Wed', today: 2000, bestResult: 9800 },
  { name: 'Thu', today: 2780, bestResult: 3908 },
  { name: 'Fri', today: 1890, bestResult: 4800 },
  { name: 'Sat', today: 2390, bestResult: 3800 },
];

const newLeadsData = [
  { name: 'March', value: 40 },
  { name: 'February', value: 40 },
  { name: 'January', value: 20 },
];

const salesData = [
  { name: '2020', bronze: 4000, silver: 2400, gold: 2400 },
  { name: '2021', bronze: 3000, silver: 1398, gold: 2210 },
  { name: '2022', bronze: 2000, silver: 9800, gold: 2290 },
  { name: '2023', bronze: 2780, silver: 3908, gold: 2000 },
];

const CMSDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg">
        <div className="flex items-center p-4">
          <div className="w-8 h-8 mr-2 bg-indigo-600 rounded-md"></div>
          <span className="font-semibold text-gray-800">real simple system</span>
        </div>
        <nav className="mt-8">
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Dashboard</a>
          <a href="#" className="block px-4 py-2 text-white bg-indigo-600">Accounts</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Contacts</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Tasks</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Calendar</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Reports</a>
          <div className="px-4 mt-4 text-xs text-gray-400">SALES</div>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Opportunities</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Quotations</a>
          <div className="px-4 mt-4 text-xs text-gray-400">MARKETING</div>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Campaigns</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Lists</a>
          <div className="px-4 mt-4 text-xs text-gray-400">HISTORY</div>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-indigo-50">Accounts</a>
        </nav>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <input type="text" placeholder="Search for accounts, contacts or tasks" className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex items-center">
            <Bell className="mr-4 text-gray-600" size={20} />
            <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 mr-2 rounded-full" />
            <span className="font-semibold text-gray-700">Stanley Green</span>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <button className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded-md hover:bg-indigo-700">
              + Add widget
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
                <Settings size={20} className="text-gray-400" />
              </div>
              <p className="mb-4 text-sm text-gray-500">Since 1 Jan 2023</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={activityData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="today" fill="#8884d8" />
                  <Bar dataKey="bestResult" fill="#e0e0ff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">New leads</h3>
                <Settings size={20} className="text-gray-400" />
              </div>
              <p className="mb-4 text-sm text-gray-500">1 Jan - 1 Mar 2023</p>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={newLeadsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Sales</h3>
                <Settings size={20} className="text-gray-400" />
              </div>
              <p className="mb-4 text-sm text-gray-500">Since 1 Jan 2020</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="bronze" stroke="#8884d8" />
                  <Line type="monotone" dataKey="silver" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="gold" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CMSDashboard;