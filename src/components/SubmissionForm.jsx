import React, { useState } from "react";

function SubmissionForm({ addMovie }) {
  const [movieID, setMovieID] = useState("");
  const [moviePlatform, setMoviePlatform] = useState("");
  const [watchDate, setWatchDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Movie ID: " + movieID);
    console.log("Movie Platform: " + moviePlatform);
    console.log("Watch Date: " + watchDate);

    const noMovie = movieID === "" || moviePlatform === "" || watchDate === "";

    if (noMovie) {
      alert("Please fill out all fields");
      return;
    } else {
      addMovie({
        id: movieID,
        platform: moviePlatform,
        watchDate: watchDate,
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h3>MOVIE NIGHT 🍿</h3>
      <input
        type="text"
        name="id"
        value={movieID}
        onChange={(e) => setMovieID(e.target.value)}
        placeholder="Movie ID"
      />

      <input
        type="text"
        name="platform"
        value={moviePlatform}
        onChange={(e) => setMoviePlatform(e.target.value)}
        placeholder="Platform"
      />

      <input
        type="date"
        id="date"
        name="date"
        value={watchDate}
        onChange={(e) => setWatchDate(e.target.value)}
        placeholder="Watch Date"
      />

      <button type="submit">ADD MOVIE</button>
    </form>
  );
}

export default SubmissionForm;
