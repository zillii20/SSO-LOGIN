import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ImageCard from "./components/ImageCard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect Route for the Pages :  */}

        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ImageCard" element={<ImageCard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
