
import React, { useState } from "react";
import "./App.css"

function Activities() {
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState([
    "Morning Walk",
    "Feeding",
    "Bath Time"
  ]);

  function addActivity() {
    if (activity.trim() === "") {
      alert("Please enter an activity");
      return;
    }

    setActivities([...activities, activity]);
    setActivity("");
  }

  return (
    <div className="page">
      <h2>Pet Activities 🎾</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Enter activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button onClick={addActivity}>Add Activity</button>
      </div>

      {activities.map((item, index) => (
        <div className="activity-item" key={index}>
          {index + 1}. {item}
        </div>
      ))}
    </div>
  );
}

export default Activities;
