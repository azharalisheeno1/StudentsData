import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import GridView from "./Components/GridView";
import TileView from "./Components/TileView";
import Courses from "./Components/Courses";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<GridView />} />
            <Route path="/tiles/:id" element={<TileView />} />
            <Route path="/course" element={<Courses />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
