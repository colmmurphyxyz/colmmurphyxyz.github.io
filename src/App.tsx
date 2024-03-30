import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
      <>
      <div className="bg"></div>
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
