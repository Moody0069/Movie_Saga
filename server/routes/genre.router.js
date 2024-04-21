const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get("/", (req, res) => {
  // Add query to get all genres
  res.sendStatus(500);
});
// GET request to retrieve genres for a specific movie
router.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
console.log('movieId')
  const queryText = `
    SELECT genres.name
      FROM genres
      JOIN movies_genres ON movies_genres.genre_id = genres.id
      JOIN movies ON movies_genres.movie_id = movies.id
      WHERE movies.id = $1
    `;

  pool
    .query(queryText, [movieId])
    .then((result) => {
      console.log("look for genres ", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.error("Error looking for genres:", error);
      res.sendStatus(500);
    });
});

module.exports = router;

