'use client';

import next from "next";
import Image from "next/image";

import PokeballLoading from "./img/pokeball.gif"

import { Header } from "./components/Header/Header";
import Card from "./components/Card/Card";
import { Pagination } from "./components/Pagination/Pagination";

import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {
	//Falta tipar useState
	const [pokemons, setPokemons] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [headerError, setHeaderError] = useState<string | null>(null);

	const urlBase = 'https://pokeapi.co/api/v2';



	useEffect(() => {
		getPokemons();
		// console.log(pokemons)
	}, [currentPage]);


	const getPokemons = async (page: number = 1) => {


		// Tempo máximo de espera em ms (500ms no exemplo)
		const maxWaitTime = 500;
		let loadingTimeout;


		try {

			loadingTimeout = setTimeout(() => setLoading(true), maxWaitTime);

			const pokemonPerPage = 9;

			const offset = (currentPage - 1) * pokemonPerPage;
			const pagination = await fetch(`${urlBase}/pokemon/?limit=${pokemonPerPage}&offset=${offset}`);
			const data = await pagination.json();

			// console.log(data.results.length)

			const pokemonDetails = [];

			for (let i = 0; i < data.results.length; i++) {
				const pokemonUrl = data.results[i].url;
				const pokemonResponse = await fetch(pokemonUrl);
				const pokemonData = await pokemonResponse.json();

				pokemonDetails.push(pokemonData);
			}

			setPokemons(pokemonDetails);


		} catch (error) {
			// console.error('Não foi:', error);

			// não conhecia esse finally
		} finally {
			// Limpa o timeout para garantir que o setLoading(false) não seja chamado se já foi feito
			clearTimeout(loadingTimeout);
			setLoading(false);
		}
	};


	const pokemonSearch = async (name?: string, onError?: string) => {

		const pokemonName = name?.toLocaleLowerCase();


		if (!pokemonName) {
			getPokemons();
			setHeaderError(null);

		} else {

			try {
				// faz uma nova solicitação para obter os detalhes do pokemon pelo nome
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

				// console.log(response)

				if (!response.ok) {
					throw new Error(`Não foi possível encontrar o Pokémon: <strong>${pokemonName}</strong>`);
				}

				setHeaderError(null);

				const pokemonData = await response.json();

				setPokemons([pokemonData]);

			} catch (error) {

				//coloquei isso pq tava retornando: error' is of type 'unknown'
				//mas não afetada o front do app

				if (error instanceof Error) {
					// console.error(error);
					setHeaderError(error.message);

				} else {
					// console.error("Ocorreu um erro desconhecido:", error);
					setHeaderError("Ocorreu um erro desconhecido.");
				}

			}

		}
	};


	return (
		<>
			<div className="max-w-5xl mx-auto px-4 py-6">
				<Header
					title="Pokedex"
					pokemonSearch={pokemonSearch}
					onError={headerError}
				/>


				<Pagination
					className="justify-center my-2"
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>


				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{loading && (
						<div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75">

							<Image src={PokeballLoading} alt="Carregando" className="w-40" />
						</div>
					)}



					{pokemons.map((pokemon) => (
						<Link key={pokemon.id} href={`/pokemon/[pokemonId]`} as={`/pokemon/${pokemon.id}`}>

							<Card
								className={`capitalize z-0 ${pokemon.types[0].type.name}`}
								idPokemon={pokemon.id}
								namePokemon={pokemon.name}
								imagePokemon={pokemon.sprites.front_default}
								typePokemon={pokemon.types[0].type.name}
							/>

						</Link>
					))}



				</div>

			</div >

		</>
	);
}
