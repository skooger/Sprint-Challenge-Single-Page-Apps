import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

const SearchForm = () =>{
  const [characters,setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const data = response.data.results;
        const result = data.filter(char =>
          char.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacters(result);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  console.log(characters)
 return(
    <div className="characters">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="character">
        {characters.map((char, index) => {
          return (
            <CharacterCard key={index}
                      char={char}/>
          );
        })}
      </div>
    </div>
 )
  

}

export default SearchForm;
