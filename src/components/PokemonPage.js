import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const pokemonAPI = "http://localhost:3001/pokemon";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

const filteredPokemon = pokemon.filter((poke) => {
  return poke.name.toLowerCase().includes(search.toLowerCase());
})

function addNewItem(newPokemon) {
  const updatedPokemon = [...pokemon, newPokemon];
  setPokemon(updatedPokemon);
}

  useEffect (() => {
    fetch(pokemonAPI)
    .then((r) => r.json())
    .then((pokemonArray) => {
      setPokemon(pokemonArray);
    })
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewItem={addNewItem} />
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
