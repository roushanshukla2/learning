import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import { ThemeProvider } from "./components/themeContext/ThemeContext.jsx";
import Modal from "./components/modal/Modal.jsx";
import SignInContainer from "./components/auth/SignInContainer.jsx";
import Footer from "./components/footer/Footer.jsx";
import Slider from "./components/slider/Slider.jsx";

import "./App.css";

// Dummy pages (replace with your real pages)
const Home = () => <h1>Home Page</h1>;
const Courses = () => <h1>Courses Page</h1>;
const Exercises = () => <h1>Exercises Page</h1>;
const Tutorials = () => <h1>Tutorials Page</h1>;
const Jobs = () => <h1>Jobs Page</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <Navbar onSignInClick={() => setShowSignIn(true)} />
        <Slider/>

        {showSignIn && (
          <Modal onClose={() => setShowSignIn(false)}>
            <SignInContainer onClose={() => setShowSignIn(false)} />
          </Modal>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
