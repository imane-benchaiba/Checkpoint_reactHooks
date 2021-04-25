import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState("")
    
    const getList = async () => {
        try {
            const reponse = await axios.get(
              `https://api.themoviedb.org/3/movie/popular?api_key=43b746b767edc8522cb6200aa1821bcb`
            );
            setList(reponse.data.results);
            console.log(reponse.data.results);
          } catch (error) {}
    };
    useEffect(() => {
        getList();
      }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
    }
    return (      
        <>
          <form onSubmit={getSearch}>
            <input type="text" value={search} onChange={updateSearch}></input>
            <button type="submit">Search</button>
         </form>
          {list.map(film => (
            <MovieCard title={film.title} description={film.overview} 
            rating={film.vote_average} image={`http://image.tmdb.org/t/p/w300${film.poster_path}`}/>
          ))};
        </>
    )
}

export default MovieList
