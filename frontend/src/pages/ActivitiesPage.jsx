import React from "react";
import "../CSS/ActivitiesPage.css";
import muscu from "../assets/muscu.jpg";
import cardio from "../assets/cardio.jpg";
import collectif from "../assets/cours-collectifs.jpg";
import yoga from "../assets/yoga.jpg";
import muscu2 from "../assets/muscu2.jpg";

function ActivitiesPage() {
  const activitiesList = [
    {
      picture: (
        <img src={muscu} alt="musculation" className="pictures-activities" />
      ),
      title: "MUSCULATION",
      définition: (
        <p>
          Ensemble d'exercices physiques visant le développement des muscles
          squelettiques, afin d'acquérir plus de force, d'endurance, de
          puissance, d'explosivité ou de volume musculaire.
        </p>
      ),
      bienfaits: (
        <div>
          <p>
            La musculation aide à gagner en tissu musculaire et à défaut, de le
            conserver. Non seulement, elle permet d'améliorer le renouvellement
            des protéines, base de la composition des muscles, mais aussi, de
            consommer plus de calories au repos et en dehors des entraînements.
          </p>
          <p>
            Par ailleurs, la musculation est également bénéfique pour le
            fonctionnement cérébral, car elle permet de lutter contre le stress
            et procure un sommeil de meilleure.
          </p>
        </div>
      ),
      matériel: (
        <div>
          <h4>La salle est équipée du matériel suivant : </h4>
          <ul>
            <li>Banc de musculation</li>
            <li>Barres de musculation</li>
            <li>Haltères de 2,5 à 25 kg</li>
            <li>Appareil pour cuisses et mollets compact</li>
          </ul>
        </div>
      ),
    },
    {
      picture: (
        <img src={cardio} alt="cardio" className="pictures-activities" />
      ),
      title: "CARDIO-TRAINING",
      définition: (
        <p>
          Le cardio-training, appelé aussi entraînement cardiovasculaire, est un
          entraînement qui agit sur le contrôle de la fréquence cardiaque lors
          d’un effort à intensité progressive. Il permet d’améliorer la
          performance du cœur et des poumons pour une meilleure distribution de
          l’oxygène.
        </p>
      ),
      bienfaits: (
        <div>
          <p>
            Le cardio-training permet de brûler les graisses et les calories
            pour perdre du poids.{" "}
            <p>
              Il aide à réduire le risque de crise cardiaque,
              d'hypercholestérolémie, d'hypertension artérielle et de diabète.{" "}
            </p>{" "}
            il contribue au soulagement de l’anxiété et le stresse, il améliore
            la qualité du sommeil.
            <p>il agit pour le renforcement musculaire.</p>
          </p>
        </div>
      ),
      matériel: (
        <div>
          <h4>La salle est équipée du matériel suivant : </h4>
          <ul>
            <li>Tapis de course</li>
            <li>Vélos elliptiques</li>
            <li>Rameurs</li>
            <li>Vélos</li>
          </ul>
        </div>
      ),
    },
    {
      picture: (
        <img
          src={collectif}
          alt="cours-collectifs"
          className="pictures-activities"
        />
      ),
      title: "COURS COLLECTIFS",
      définition: (
        <p>
          Le fitness réunit l'ensemble des activités destinées à maintenir la
          forme physique par des exercices pratiqués à l'aide d'appareils. le
          fitness est un sport plus doux dont le but est de renforcer l'ensemble
          du corps avec un stress physique réduit. Le cardio est au coeur de
          cette activité .
        </p>
      ),
      bienfaits: (
        <div>
          <p>
            La musculation aide à gagner en tissu musculaire et à défaut, de le
            conserver. Non seulement, elle permet d'améliorer le renouvellement
            des protéines, base de la composition des muscles, mais aussi, de
            consommer plus de calories au repos et en dehors des entraînements.
          </p>
          <p>
            Par ailleurs, la musculation est également bénéfique pour le
            fonctionnement cérébral, car elle permet de lutter contre le stress
            et procure un sommeil de meilleure.
          </p>
        </div>
      ),
      matériel: (
        <div>
          <h4>La salle est équipée du matériel suivant : </h4>
          <ul>
            <li>Poids légers</li>
            <li>Elastiques</li>
            <li>Ballons</li>
          </ul>
        </div>
      ),
    },
    {
      picture: <img src={yoga} alt="yoga" className="pictures-activities" />,
      title: "YOGA",
      définition: (
        <p>
          Le yoga est une doctrine composée d'exercices traditionnels hindous,
          cherchant à réunir l'individu avec le principe de toute existence. Les
          exercices, pratiqués comme une gymnastique.
        </p>
      ),
      bienfaits: (
        <div>
          <p>
            Le yoga permet d'améliorer la respiration, la concentration, la
            posture. Il renforce le dos et ses articulations. ... On améliore sa
            posture et son équilibre. Il tonifie sa silhouette. Idéal pour
            calmer le stress.
          </p>
        </div>
      ),
      matériel: (
        <div>
          <h4>La salle est équipée du matériel suivant : </h4>
          <ul>
            <li>Tapis de yoga</li>
            <li>Musique zen</li>
            <li>Cours dispensé par un professeur certifié</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="activities">
      <img className="img-subscription-page" src={muscu2} alt="muscu" />
      <div className="header-subscription-page">
        <h2 className="header-title">NOS ACTIVITES</h2>
      </div>

      <div className="box">
        {activitiesList.map((data) => {
          return (
            <div className="box-activities" key={data.title}>
              <ul>
                <div className="box1">
                  <div className="box2">
                    <h2 className="activity-title">{data.title}</h2>
                    {data.picture}
                  </div>
                  <div className="box3">
                    <h3>Définition</h3>
                    {data.définition}
                    <h3>Bienfaits</h3>
                    {data.bienfaits}
                    <h3>Matériel</h3>
                    {data.matériel}
                  </div>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivitiesPage;
