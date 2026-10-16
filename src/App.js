
import React from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import MyPets from "./MyPets";
import Activities from "./Activities";
import Reports from "./Reports";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Header />

        <main className="page-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pets" element={<MyPets />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
          
        </main>

        <footer className="footer">
          <div>
            <h3>🐾 PetCare</h3>
            <p>Your trusted companion for your lovely pets.</p>
          </div>

          <p className="footer-bottom">
            © 2026 PetCare. Made with 💙 for pets.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
