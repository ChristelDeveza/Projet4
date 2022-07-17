import { Link } from "react-router-dom";
import { GoFlame } from "react-icons/go";
import { BiRun } from "react-icons/bi";
import { IoIosFitness } from "react-icons/io";
import { MdSportsHandball } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { GiHeartBeats } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import CountUp from "react-countup";
import "../CSS/Home.css";
import Subscription from "../components/Subscription";
import Activity from "../components/Activity";
import WhyUs from "../components/WhyUs";
import SlideShow from "../components/SlideShow";

export default function Home() {
  return (
    <div className="Home">
      <div className="left-home-box">
        <div className="text-home-header">
          <GoFlame className="icon-flame" />
          <span>N'attends plus, contacte nous pour une scéance d'essai</span>
        </div>
        <div className="title">
          <div>Quelque soit ton objectif,</div>{" "}
          <div>Nous avons le programme qu'il te faut</div>
        </div>
        <div className="stats">
          <div>
            <span>
              +<CountUp end={5} />
            </span>
            <span>experts</span>
          </div>
          <div>
            <span>
              +<CountUp end={136} />
            </span>
            <span>adhérents</span>
          </div>
          <div>
            <span>
              +<CountUp end={45} />
            </span>
            <span>programmes</span>
          </div>
        </div>
        <div className="home-btn">
          <button className="btnH" type="button">
            <Link to="MonCompte" className="text-decoration">
              M'INSCRIRE
            </Link>
          </button>

          <button className="btnH" type="button">
            <Link to="Abonnements" className="text-decoration">
              DECOUVRIR
            </Link>
          </button>
        </div>
        <Subscription />
        <Activity />
        <WhyUs />
      </div>
      <div className="right-home-box">
        <div>
          <SlideShow />
        </div>
        <div className="icon-activities">
          <BiRun />
          <IoIosFitness />
          <MdSportsHandball />
          <GrYoga />
          <GiHeartBeats />
        </div>
        <div className="icon-advantages">
          <BsCheck2Circle />
        </div>
      </div>
    </div>
  );
}
