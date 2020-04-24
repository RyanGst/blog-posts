//eslint-disable-next-line
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import "./index.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id },
      });
      setPosts(response.data);
    }
    loadSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {posts.map((spot) => (
          <li key={spot._id}>
            <header
              style={{
                backgroundImage: `url(${spot.thumbnail_url})`,
              }}
            />
            <strong>{spot.title}</strong>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Escrever novo post</button>
      </Link>
    </>
  );
}
