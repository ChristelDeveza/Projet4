import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import SubscriptionPage from "./pages/SubscriptionPage";
import Navbar from "./components/Navbar";
import ActivitiesPage from "./pages/ActivitiesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UserLoginPage from "./pages/UserLoginPage";
import Register from "./components/Register";
import UserDashboardPage from "./pages/UserDashboardPage";
import UserContextIsOnline from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextIsOnline>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Abonnements" element={<SubscriptionPage />} />
            <Route path="Activites" element={<ActivitiesPage />} />
            <Route path="APropos" element={<AboutPage />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="Moncompte" element={<UserLoginPage />} />
            <Route path="CreerUnCompte" element={<Register />} />
            <Route path="Moncompteuser" element={<UserDashboardPage />} />
          </Routes>
        </Router>
      </UserContextIsOnline>
      <Footer />
    </div>
  );
}

export default App;
