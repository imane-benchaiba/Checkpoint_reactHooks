import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Filter = () => {
    const [populars, setPopular] = useState();
    const getPopular = async () => {
    try {
      const reponse = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=43b746b767edc8522cb6200aa1821bcb"
      );
      setPopular(reponse.data.results);
    } catch (error) {}
  };
  useEffect(() => {
    getPopular();
  }, []);
    return (
        <div>
            <form>
                <input type="text"/>
                <button type="submit" value="" onClick = {populars &&
                    populars.filter((name) => <MovieCard movie={name} key={name.id} />)}>
                    Search</button>
            </form>            
        </div>
    )
}
export default Filter
