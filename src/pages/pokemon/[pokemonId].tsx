// src/pages/pokemon/[pokemonId].tsx

import next from "next";

import "@/app/globals.css";

import { PokemonDetailsTypes } from "./pokemonDetailsTypes.types";

import { PokemonStatus } from '@/app/components/PokemonStatus/PokemonStatus';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ContainerPokemon } from "@/app/components/ContainerPokemon/ContainerPokemon";
import HeaderSingle from "@/app/components/HeaderSingle/HeaderSingle";

const PokemonPage = () => {

  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsTypes[]>([]);

  const router = useRouter();
  const { pokemonId } = router.query;

  const baseUrl = process.env.NEXT_PUBLIC_POKEAPI_BASE_URL;

  useEffect(() => {
    getPokemonByID();

    // console.log(pokemonDetails)
  }, [pokemonId])

  const getPokemonByID = async () => {
    try {
      // console.log('pokemonId:', pokemonId);

      if (!pokemonId) {
        return;
      }

      const urlGet = `${baseUrl}/pokemon/${pokemonId}`;
      // console.log('URL da chamada API:', urlGet);

      const pokemonRequest = await fetch(urlGet);
      // console.log('Resposta da API:', pokemonRequest);

      if (!pokemonRequest.ok) {
        throw new Error('Erro ao buscar Pokémon');
      }

      const pokemon = await pokemonRequest.json();
      // console.log('Detalhes do Pokémon:', pokemon);

      setPokemonDetails(pokemon);

    } catch (error) {
      console.error('Erro:', error);

    }
  };

  // console.log(pokemonDetails)

  const typeOfFirstPokemon = pokemonDetails.types && pokemonDetails.types.length > 0
    ? pokemonDetails.types[0].type.name
    : "No types available for this Pokemon =D";

  const pokemonTypes = pokemonDetails.types && pokemonDetails.types.length > 0
    ? pokemonDetails.types
    : "No types available for this Pokemon =D";

  // console.log(pokemonTypes)

  const imagePokemon = pokemonDetails.sprites?.front_default
    ? pokemonDetails.sprites.front_default
    : "";


  return (

    <ContainerPokemon typePokemon={typeOfFirstPokemon}>

      <HeaderSingle
        imagePokemon={imagePokemon}
      />


      <PokemonStatus
        typePokemon={pokemonTypes}
      />

    </ContainerPokemon>


  );
};

export default PokemonPage;
