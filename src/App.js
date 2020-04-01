import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movie';
import Search from './components/Search';

const App = () => {

  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("The matrix");

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   fetchMovies(title).then(movie => {
  //     // setTitle(movie.Title);
  //     // console.log(movie);
  //   });

  // }


  const fetchMovies = async (query) => {
    const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=ffc0da62`);
    const resJson = await response.json();
    console.log(resJson);
    setTitle(resJson);
  }
  // fetchMovies(query)
  //   .then(movies=>console.log(movies))


  return (
    <div className="App">
      <Header/>
      <Movies title={title.Title} runTime={title.Runtime} year={title.Year} rating={title.Rating} poster={title.Poster}/>
      <Search fetchMovies={(q) => fetchMovies(q)} />
    </div>
  );
}

export default App;
