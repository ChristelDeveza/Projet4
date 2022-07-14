import "../CSS/Header.css";
import logoHeader from "../assets/logo-header.svg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="Header">
      <img className="logo-header" src={logoHeader} alt="logo-header" />
      <Navbar />
    </div>
  );
}
