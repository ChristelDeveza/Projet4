import Header from "../components/Header";
import "../CSS/Home.css";
import logoFlamme from "../assets/logo-flamme.svg";
import photoHome from "../assets/photo-home.jpg";

export default function Home() {
  return (
    <div className="Home">
      <div className="left-home-box">
        <Header />
        <div className="text-home-header">
          <img className="logo-flamme" src={logoFlamme} alt="logo-flamme" />
          <span>N'attends plus, contacte nous pour une scéance d'essai</span>
        </div>
        <div className="title">
          <div>Quelque soit ton objectif,</div>{" "}
          <div>Nous avons le programme qu'il te faut</div>
        </div>
        <div className="stats">
          <div>
            <span>+5</span>
            <span>experts</span>
          </div>
          <div>
            <span>+136</span>
            <span>adhérents</span>
          </div>
          <div>
            <span>+45</span>
            <span>programmes</span>
          </div>
        </div>
        <div className="home-btn">
          <button className="btnH" type="button">
            M'INSCRIRE
          </button>
          <button className="btnH" type="button">
            DECOUVRIR
          </button>
        </div>
      </div>
      <div className="right-home-box">
        <button type="button" className="btn-mon-compte">
          MON COMPTE
        </button>
        <div>
          <img className="photoHome" src={photoHome} alt="photohome" />
        </div>
      </div>
    </div>
  );
}
