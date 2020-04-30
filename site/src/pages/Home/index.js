import React from "react";

import "./styles.css";

import Vector from "../../assets/vector.svg";
import Felipe from "../../assets/dr-felipe.png";

export default function Home() {
  return (
    <>
      <div className="text-container">
        <h1>
          Tratamento ao <br /> seu alcance
        </h1>
        <h2>
          Junte-se a milhares de pessoas <br /> que deram o primeiro passo{" "}
          <br /> para melhorar seu bem estar
        </h2>
        <button>Vamos começar?</button>
      </div>
      <div className="image-container">
        <img alt="Dr Felipe Batistela" id="felipe" src={Felipe} />

        <img alt="vector" id="vector" src={Vector} />
      </div>
    </>
  );
}
