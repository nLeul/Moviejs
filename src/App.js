import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movie';
import Search from './components/Search';

const App = () => {

  const [title, setTitle] = useState("The matrix");

  useEffect(() => {
    fetchMovies(title);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    fetchMovies(title).then(movie => {
      // setTitle(movie.Title);
      // console.log(movie);
    });

  }


  const fetchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=ffc0da62`);
    const resJson = await response.json();
    console.log(resJson);
    // setTitle(resJson.Title);
  }


  return (
    <div className="App">
      <Header />
      <Movies title="The Martix" runTime="123 MIn" year="2010" rating="4.5" />
      <Search value={value} searchTag={(e)=>searchHandler(e)} />
    </div>
  );
}

export default App;
