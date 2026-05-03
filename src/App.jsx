import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [economy, setEconomy] = useState(25);
  const [air, setAir] = useState(20);
  const [activity, setActivity] = useState(30);
  const [wars, setWars] = useState(1);

  const score = Math.max(0, Math.min(100, economy * 2 + air * 2 + activity * 2 - wars * 15));

  return (
    <div style={{ padding: 20, background: "#0b1020", color: "white", minHeight: "100vh" }}>
      <h1>CON WW3 Beast Coach</h1>

      <h2>Day 1–7 Plan</h2>
      <p>Day 1: Build Arms Industry everywhere</p>
      <p>Day 2: Expand and build Army Base</p>
      <p>Day 3: Start Air or Artillery</p>
      <p>Day 4+: Snowball economy and dominate</p>

      <h2>Beast Meter</h2>
      <div style={{ background: "#111", height: 20, borderRadius: 10 }}>
        <div style={{ width: score + "%", height: "100%", background: "lime" }}></div>
      </div>
      <p>{score}/100</p>

      <h3>Stats</h3>
      <input type="number" value={economy} onChange={(e) => setEconomy(Number(e.target.value))} /> Economy<br/>
      <input type="number" value={air} onChange={(e) => setAir(Number(e.target.value))} /> Air<br/>
      <input type="number" value={activity} onChange={(e) => setActivity(Number(e.target.value))} /> Activity<br/>
      <input type="number" value={wars} onChange={(e) => setWars(Number(e.target.value))} /> Wars<br/>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
