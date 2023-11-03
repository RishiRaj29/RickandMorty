// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CharacterDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
