import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Information from "./pages/Information";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>|<Link to="/about">About</Link>|
                <Link to="/info">Info</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/info" element={<Information />} />
            </Routes>
        </Router>
    );
}

export default App;
