import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/resuable/header";
import ContactPage from './pages/contact';
import { Portfolio } from './pages/home';
import AboutPage from './pages/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;