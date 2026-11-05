import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks';
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calender";
import TeamMembers from "./pages/TeamMembers";


import SideBar from "../components/SideBar";
import Heading from "../components/Heading";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-44 shrink-0">
        <SideBar />
      </div>

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
  );
}

export default App
