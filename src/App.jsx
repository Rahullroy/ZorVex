import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';


import SideBar from "../components/SideBar";
import Heading from "../components/Heading";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar stays visible */}
        <div className="w-44 shrink-0">
          <SideBar />
        </div>

        {/* Main content changes based on route */}
        <div className="flex-1 min-w-0 p-6">
          <Heading />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/team-members" element={<TeamMembers />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
