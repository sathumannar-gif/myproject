import React, { useState } from "react";

function App() {
  const [activities, setActivities] = useState([
    { id: 1, name: "Exercise", completed: false },
    { id: 2, name: "Study", completed: false }
  ]);

  const markCompleted = (id) => {
    const updated = activities.map((act) =>
      act.id === id ? { ...act, completed: true } : act
    );
    setActivities(updated);
  };

  const completedCount = activities.filter(a => a.completed).length;

  return (
    <div>
      <h2>Activities</h2>
      <p>{completedCount} out of {activities.length} completed</p>

      {activities.map((act) => (
        <div key={act.id}>
          <span style={{
            textDecoration: act.completed ? "line-through" : "none"
          }}>
            {act.name}
          </span>

          <button onClick={() => markCompleted(act.id)}>
            {act.completed ? "Done" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;