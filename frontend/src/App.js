import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ColorPalette from "./pages/ColorPalette";
import Typography from "./pages/Typography";
import Logo from "./pages/Logo";
import Textures from "./pages/Textures";
import TikTokTemplates from "./pages/TikTokTemplates";
import VideoTeaser from "./pages/VideoTeaser";
import Guidelines from "./pages/Guidelines";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/colors" element={<ColorPalette />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/textures" element={<Textures />} />
          <Route path="/tiktok" element={<TikTokTemplates />} />
          <Route path="/video" element={<VideoTeaser />} />
          <Route path="/guidelines" element={<Guidelines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;