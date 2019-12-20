import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

const SearchForm = () =>{
  const [characters,setCharacters] = useState([]);
  const [origins,setOrigins] = useState([]);
  const [query, setQuery] = useState("");
  const [orginsQuery, setOrginsQuery] = useState("");
  let isOrginSearch = false;

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const data = response.data.results;
        const resultName = data.filter(char =>
          char.name.toLowerCase().includes(query.toLowerCase())
        );
        const resultOrigin = data.filter(char =>
          char.origin.name.toLowerCase().includes(orginsQuery.toLowerCase())
       
        );
        setCharacters(resultName);
        setOrigins(resultOrigin);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const handleOriginInputChange = event => {
    isOrginSearch = true;
    setOrginsQuery(event.target.value);
  }

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
         <input
          type="text"
          onChange={handleOriginInputChange}
          value={orginsQuery}
          name="origin"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by origin"
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
