import React, { useEffect, useRef, useState } from "react";

import Logo from "../assets/logo.svg";

import "./styles.css";

export default function Header() {
  return (
    <>
      <nav>
        <div className="header">
          <div className="logo">
            <a href="/">
              <img alt="logo" src={Logo} />
            </a>
            <div className="logo-text">
              <h1>Dr. Felipe Batistela</h1>
            </div>
          </div>
          <div className="header-right">
            <a href="/">Home</a>
            <a href="/">Quem nós somos?</a>
            <a href="/">Vídeos</a>
            <a>Entrar</a>
          </div>
        </div>
      </nav>
    </>
  );
}
