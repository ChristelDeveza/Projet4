import React from "react";
import CardSubscription from "./CardSubscription";
import "../CSS/Subscription.css";

function Subscription() {
  const SubscriptionDatas = [
    {
      title: "CHEAP",
      price: "16,99 € pendant 6 mois, puis 21,99 €",
      advantages: (
        <p>
          <ul>
            <li>Faites du sport à petit prix</li>
            <li>Accès à la salle 2 fois/semaine</li>
            <li>Accès à tous les équipements, à l'acception du spa corner</li>
            <li>Idéal pour faire du sport en douceur</li>
            <li>Le petit plus : un pack de bienvenue offert</li>
          </ul>
        </p>
      ),
      description: (
        <p>
          <ul>
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
          <ul>
            <li>Faites du sport à petit prix</li>
            <li>Accès illimité à la salle</li>
            <li>Accès à tous les équipements, à l'acception du spa corner</li>
            <li>Idéal pour se remettre en forme et atteindre ses objectifs</li>
            <li>Pack de bienvenue offert</li>
            <li>Le petit plus : un coaching gratuit</li>
          </ul>
        </p>
      ),
      description: (
        <p>
          <ul>
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
          <ul>
            <li>Faites du sport à petit prix</li>
            <li>Accès illimité à la salle</li>
            <li>Accès à tous les équipements, spa corner inclus</li>
            <li>Idéal pour se remettre en forme et atteindre ses objectifs</li>
            <li>Pack de bienvenue offert</li>
            <li>Le petit plus : accès au spa</li>
          </ul>
        </p>
      ),
      description: (
        <p>
          <ul>
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
    <div className="subscription">
      <div>
        <h2>NOS ABONNEMENTS</h2>
        <hr />
      </div>
      <div className="box-subscription">
        {SubscriptionDatas.map((data) => {
          return (
            <div className="card-subscription">
              <CardSubscription
                key={data.title}
                title={data.title}
                price={data.price}
                advantages={data.advantages}
                description={data.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subscription;
