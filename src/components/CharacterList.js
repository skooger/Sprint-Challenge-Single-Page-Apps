import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters,setCharacters] = useState([]);
  const axios = require('axios').default;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const fetchData = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      console.log(response.data.results);
      setCharacters(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <section className="character-list">
     {characters.map((char,index) => (
        <CharacterCard key={index}
                      char={char}/>

      ))}
    </section>
  );
}
