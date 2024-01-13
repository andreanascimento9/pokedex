'use client';

import Image from "next/image";
import { Header } from "./components/Header/Header";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";


export default function Home() {
	//Falta tipar useState
	const [pokemons, setPokemons] = useState<any[]>([]);

	const urlBase = 'https://pokeapi.co/api/v2/pokemon';

	useEffect(() => {
		getPokemons();
		// console.log(pokemons)
  }, []);

	const getPokemons = async () => {
    try {
      const endpoints = [];

      for (let i = 1; i < 16; i++) {
        endpoints.push(`${urlBase}/${i}`);
      }

      const responses = await Promise.all(
        endpoints.map((endpoint) => fetch(endpoint).then((res) => res.json()))
      );
			// console.log(endpoints);
      setPokemons(responses);

			} catch (error) {
				console.error('Não foi:', error);
			}
  };

	const pokemonSearch = (name?: string) => {
		name = name?.toLocaleLowerCase();
		
		if(name === ''){
			getPokemons();
		}

		if (name) {
			let searchedPokemons = [];

			for (let i in pokemons) {
				if (pokemons[i] && pokemons[i].name.includes(name)) {
					searchedPokemons.push(pokemons[i]);
				}
			}

			setPokemons(searchedPokemons)
		} 
	};

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Header 
					title="Pokedex" 
					pokemonSearch={pokemonSearch}
				/>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
					{pokemons.map((pokemon, key) => (
						<Card 
							key={key}
							className="capitalize"
							idPokemon={pokemon.id}
							namePokemon={pokemon.name} 
							imagePokemon={pokemon.sprites.front_default}
							typePokemon={pokemon.types[0].type.name} 
						/>
					))}
				</div>
      </div>
    </>
  );
}
