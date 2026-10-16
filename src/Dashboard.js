
import React from "react";
import "./App.css";


function Dashboard() {
  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>🐶 Total Pets</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>🎾 Activities</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>💊 Health Checks</h3>
          <p>2</p>
        </div>
      </div>

      <div className="welcome-section">
        <h3>Welcome to PetCare!</h3>
        <p>
          Manage your pets and track their daily activities.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
