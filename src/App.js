import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import OneMovie from "./components/OneMovie";

export default function App() {
  const [movies, setMovies] = useState([
    {
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic.",
      posterUrl:
        "https://www.cnet.com/a/img/resize/1a674ecf994dc53a3756a94b8c8252f90e88c795/hub/2021/04/19/111f2cf0-1f0e-4884-8733-a4809195773c/shang-chi-poster-marvel.jpg?auto=webp&width=1092",
      rate: 5,
      id: 0,
      link: "https://www.youtube.com/embed/kb0Af7dzCTs"
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
      rate: 5,
      id: 1,
      link: "https://www.youtube.com/embed/pBKiWb9VWBU"
    },
    {
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      rate: 4,
      id: 2,
      link: "https://www.youtube.com/embed/hZbVW04Ohjk"
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest .",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rate: 3,
      id: 3,
      link: "https://www.youtube.com/embed/hZbVW04Ohjk"
    },
    {
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      rate: 4,
      id: 4,
      link: "https://www.youtube.com/embed/VDwHUrZrT0U"
    },
    {
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rate: 4,
      id: 5,
      link: "https://www.youtube.com/embed/VDwHUrZrT0U"
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales.",
      posterUrl:
        "https://qqcdnpictest.mxplay.com/pic/cda6ced62b423d4a51c8e817f31d8067/en/2x3/320x480/test_pic1583329887991.webp",
      rate: 3,
      id: 6,
      link: "https://youtu.be/cjBPnIXK60U"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMwNTAzNDIzOV5BMl5BanBnXkFtZTcwNzg1NjgyMQ@@._V1_UY218_CR1,0,150,218_AL_.jpg",
      rate: 4,
      id: 7,
      link: "https://www.youtube.com/embed/VDwHUrZrT0U"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried.",
      posterUrl:
        "https://cdn.hmv.com/r/w-1280/hmv/files/33/3385d6d7-570c-4baa-b344-552f9b6147f5.jpg",
      rate: 4,
      id: 8,
      link: "https://www.youtube.com/embed/VDwHUrZrT0U"
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something.",
      posterUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e",
      rate: 2,
      id: 9,
      link: "https://www.youtube.com/embed/VDwHUrZrT0U"
    }
  ]);
  const [searchTitle, setSearchTitle] = useState("");
  const [rating, setRating] = useState(1);
  // add movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  const getSearch = (title) => {
    setSearchTitle(title);
  };
  const getRating = (rate) => {
    setRating(rate);
  };

  return (
    <Router>
      <div className="App">
        <NavBar getSearch={getSearch} getRating={getRating} />
        <br />

        <Route exact path="/">
          <AddMovie addMovie={addMovie} />

          <MoviesList
            movies={movies}
            searchTitle={searchTitle}
            rating={rating}
          />
        </Route>

        <Route path="/onemovie/:Id">
          <OneMovie movies={movies} />
        </Route>
      </div>
    </Router>
  );
}
