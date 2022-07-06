import React from 'react';
import './App.css';
import axios from "axios";
import {PokemonModel, PokemonStore} from "./PokemonStore";

const baseURL = "https://pokeapi.co/api/v2/pokemon/lanturn";

function App() {
  const [pokemon, setPokemon] = PokemonStore.usePokemon();
  React.useEffect(() => {
    axios.get<PokemonModel>(baseURL).then((response) => {
      setPokemon(response.data);
    });
  }, []);
  if (!pokemon) return null;
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokemon.sprites.back_default} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
