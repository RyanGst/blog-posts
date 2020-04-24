import React, { useState } from "react";
import api from "../../service/api";

export default function Register({ history }) {
  const [inputs, setInputs] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    //eslint-disable-next-line
    const response = await api.post("/sessions", inputs);

    history.push("/");
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Chave da aplicação</label>
        <input
          id="email"
          required={true}
          placeholder="Sua chave da aplicação"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required={true}
          placeholder="Seu melhor email"
          value={inputs.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          required={true}
          placeholder="Senha"
          value={inputs.password}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
