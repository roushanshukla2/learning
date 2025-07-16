import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import { ThemeProvider } from "./components/themeContext/ThemeContext.jsx";
import Modal from "./components/modal/Modal.jsx";
import SignInContainer from "./components/auth/SignInContainer.jsx";

import "./App.css";

// import './App.css'
function App() {

  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <Navbar onSignInClick={() => setShowSignIn(true)} />

        {showSignIn && (
          <Modal onClose={() => setShowSignIn(false)}>
            <SignInContainer onClose={() => setShowSignIn(false)} />
          </Modal>
        )}

        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/courses" element={<></>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
