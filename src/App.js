import Jumbotron from "./components/home/Jumbotron";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Jumbotron />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

