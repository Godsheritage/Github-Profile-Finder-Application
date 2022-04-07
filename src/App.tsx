import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import NotFound from "./Pages/NotFound";
import React from "react";
import { GithubProvider } from "./context/Github/GithubContext";

const App: React.FC = () => {
  return (
    <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/user/:login" element={<User />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    </GithubProvider>
  );
};

export default App;
