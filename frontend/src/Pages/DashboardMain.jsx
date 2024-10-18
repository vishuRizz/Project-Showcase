import React from 'react'
import Sidebar from "../components/SideBar"
import Dashboard from "../components/Dashboard"
function DashboardMain() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default DashboardMain
