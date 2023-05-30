import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieCard({ movieName, poster_path, overview, _id, platform }) {
  const platforms = [
    {
      name: "Netflix",
      backgroundRGB: "rgb(225,35,23)",
      background:
        "linear-gradient(90deg, rgba(225,35,23,1) 29%, rgba(0,0,3,1) 91%)",
    },
    {
      name: "Hulu",
      backgroundRGB: "rgb(92,151,48)",
      background:
        "linear-gradient(90deg, rgba(92,151,48,1) 0%, rgba(0,0,3,1) 92%)",
    },
    {
      name: "Disney+",
      backgroundRGB: "rgb(0,144,158)",
      background:
        "linear-gradient(90deg, rgba(0,144,158,1) 0%, rgba(0,0,3,1) 92%)",
    },
    {
      name: "Amazon Prime",
      backgroundRGB: "rgb(0,0,0)",
      background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,3,1) 92%)",
    },
  ];

  const selectedPlatform =
    platforms.find((p) => p.name === platform) || platforms[0];

  const deleteMovie = async () => {
    const deleteMovie = await axios.post("http://localhost:3010/delete", {
      id: _id,
    });
  };

  return (
    <div
      key={_id}
      className="movieCard"
      style={{
        background: selectedPlatform.backgroundRGB,
        background: selectedPlatform.background,
      }}
    >
      <img
        src={`
            https://image.tmdb.org/t/p/w1280/https://www.themoviedb.org/t/p/w1280/${poster_path}`}
        alt={`Poster for ${movieName} || ${overview} || movie`}
      />
      <h3>
        {movieName} ({platform})
      </h3>
      <p>{overview}</p>
      <button
        onClick={() => {
          deleteMovie();
        }}
      >
        DELETE MOVIE
      </button>
    </div>
  );
}

export default MovieCard;
