import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(true);
  const handleMenuCloseClick = () => setMenuOpen(false);

  return (
    <div className="App">
      <Header
        onClick={handleMenuClick}
        onClose={handleMenuCloseClick}
        menuState={menuOpen}
      />
      <Home menuState={menuOpen} />
    </div>
  );
}

export default App;
