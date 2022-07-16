import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import Activity from "./components/Activity";
import SubscriptionPage from "./pages/SubscriptionPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Abonnements" element={<SubscriptionPage />} />
          <Route path="Activités" element={<Activity />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
