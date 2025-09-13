import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Loading Page goes here</h1>} />
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
