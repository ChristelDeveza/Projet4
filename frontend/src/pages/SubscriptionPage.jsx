import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { GoFlame } from "react-icons/go";
import "../CSS/SubscriptionPage.css";
import muscu from "../assets/muscu.jpg";
import ButtonInscription from "../components/ButtonInscription";

function SubscriptionPage() {
  const SubscriptionPageDatas = [
    {
      title: "CHEAP",
      price: "16,99 € pendant 6 mois, puis 21,99 €",
      advantages: (
        <p>
          <ul className="check-subs">
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Faites du sport à petit prix
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Accès à la salle 2 fois/semaine
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Accès à tous les équipements, à l'acception du spa corner
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Idéal pour faire du sport en douceur
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Le petit plus : un pack de bienvenue offert
            </li>
          </ul>
        </p>
      ),
      description: (
        <p>
          <ul className="check-subs">
            <li>Accès libre à votre salle de 9h à 20h</li>
            <li>
              2 entrées par semaine : une fois entré, vous pouvez rester autant
              que vous le souhaitez
            </li>
            <li>Engagement d'un an</li>
            <li>Carte de membre</li>
            <li>Accès à tous les équipements, à l'acception du spa corner</li>
            <li>Accès aux vestiaires avec casiers privatifs</li>
            <li>Report de votre abonnement pour cause de maladie</li>
            <li>
              Pack de bienvenue offert comprenant : un sac de sport, une gourde
              et un autocollant
            </li>
          </ul>
        </p>
      ),
    },
    {
      title: "FIT",
      price: "23,99 € pendant 6 mois, puis 29,99 €",
      advantages: (
        <p>
          <ul className="check-subs">
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Faites du sport à petit prix
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Accès illimité à la salle
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Accès à tous les équipements, à l'acception du spa corner
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Idéal pour se remettre en forme et atteindre ses objectifs
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Pack de bienvenue offert
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Le petit plus : un coaching gratuit
            </li>
          </ul>
        </p>
      ),
      description: (
        <p>
          <ul className="check-subs">
            <li>Accès illimité à votre salle de 9h à 20h</li>
            <li>Engagement d'un an</li>
            <li>Carte de membre</li>
            <li>Accès à tous les équipements, à l'acception du spa corner</li>
            <li>
              Atteignez vos obsjectifs avec un coaching gratuit élaboré par un
              de nos experts
            </li>
            <li>Accès aux vestiaires avec casiers privatifs</li>
            <li>Report de votre abonnement pour cause de maladie</li>
            <li>
              Pack de bienvenue offert comprenant : sac de sport, gourde,
              serviette et autocollant
            </li>
          </ul>
        </p>
      ),
    },
    {
      title: "GOLD",
      price: "31,99 € pendant 6 mois, puis 36,99 €",
      advantages: (
        <p>
          <ul className="check-subs">
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Faites du sport à petit prix
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Accès illimité à la salle
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Accès à tous les équipements, spa corner inclus
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Idéal pour se remettre en forme et atteindre ses objectifs
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Pack de bienvenue offert
            </li>
            <li>
              <BsCheck2Circle className="color-check-subs" />
              Le petit plus : accès au spa
            </li>
          </ul>
        </p>
      ),
      description: (
        <p>
          <ul className="check-subs">
            <li>Accès illimité à votre salle 24h/24</li>
            <li>Engagement d'un an</li>
            <li>Carte de membre gold</li>
            <li>Accès à tous les équipements, spa corner inclus</li>
            <li>
              Atteignez vos obsjectifs avec deux coaching gratuits élaborés par
              un de nos experts
            </li>
            <li>
              Toutes les autres heures de coaching supplémentaires sont à moitié
              prix
            </li>
            <li>Accès aux vestiaires avec casiers privatifs</li>
            <li>Report de votre abonnement pour cause de maladie</li>
            <li>
              Pack de bienvenue offert comprenant : sac de sport, gourde,
              serviette, peignoir et autocollant
            </li>
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div className="subscription-page">
      <img className="img-subscription-page" src={muscu} alt="muscu" />
      <div className="header-subscription-page">
        <h2 className="header-title">NOS ABONNEMENTS</h2>
      </div>

      <div className="subscription-page-container">
        {SubscriptionPageDatas.map((data) => {
          return (
            <div className="box-subs" key={data.title}>
              <ul className="ul-margin">
                <h3 className="title-subs-box">{data.title}</h3>
                <h4 className="price">
                  {" "}
                  <GoFlame className="icon-flame" />
                  {data.price}
                </h4>
                {data.advantages}
                {data.description}
              </ul>
              <div className="button-insc">
                <ButtonInscription />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SubscriptionPage;
