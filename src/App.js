import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
        <Route path="/characters">
          <CharacterList/>
        </Route>
        <Route path="/search">
          <SearchForm/>
        </Route>


      </Switch>
      
      
    </main>
  );
}
