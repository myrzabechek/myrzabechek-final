import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Info" element={<Info />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;