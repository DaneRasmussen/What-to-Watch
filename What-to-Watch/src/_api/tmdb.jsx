const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies({ streaming, genre, startYear, endYear }) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    sort_by: "vote_average.desc", // or popularity.desc
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    with_watch_providers: streaming.join("|"),
    watch_region: "US",
    with_genres: genre.join(","),
    "primary_release_date.gte": startYear ? `${startYear}-01-01` : "",
    "primary_release_date.lte": endYear ? `${endYear}-12-31` : "",
    "vote_count.gte": 100
  });

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?${params}`
  );
  const data = await res.json();
  console.log(data.results, params, `https://api.themoviedb.org/3/discover/movie?${params}`)
  console.log("genres: ", params.with_genre)
  return data.results || [];
}
