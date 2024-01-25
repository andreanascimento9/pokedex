

import { Children } from "react";
import { ContainerPokemonProps } from "./ContainerPokemon.types";

function ContainerPokemon({typePokemon, children}: ContainerPokemonProps) {

	let bgColorType

    switch (typePokemon) {
        case 'fire':
            bgColorType = 'bg-[#F57D31]';
            break;

        case 'grass':
            bgColorType = 'bg-[#74CB48]';
            break;

        case 'water':
            bgColorType = 'bg-[#6493EB]';
            break;

        case 'normal':
            bgColorType = 'bg-[#AAA67F]';
            break;

        case 'bug':
            bgColorType = 'bg-[#A7B723]';
            break;

        case 'eletric':
            bgColorType = 'bg-[#F9CF30]';
            break;

        case 'ghost':
            bgColorType = 'bg-[#70559B]';
            break;

        case 'psychic':
            bgColorType = 'bg-[#FB5584]';
            break;

        case 'steel':
            bgColorType = 'bg-[#B7B9D0]';
            break;

        case 'poison':
            bgColorType = 'bg-[#730bdd]';
            break;

        case 'fairy':
            bgColorType = 'bg-[#d0a8b0]';
            break;

        case 'ground':
            bgColorType = 'bg-[#BE8F65]';
            break;

        case 'fighting':
            bgColorType = 'bg-[#CC0000]';
            break;

        case 'rock':
            bgColorType = 'bg-[#aaaaaa]';
            break;

        case 'electric':
            bgColorType = 'bg-[#ffde00]';
            break;

        case 'ice':
            bgColorType = 'bg-[#a8c3dd]';
            break;

        case 'dragon':
            bgColorType = 'bg-[#757cbb]';
            break;

        default:
            bgColorType = 'bg-[#000000]';
            break;
    }
    return (
       

            <div className={`${bgColorType} h-screen`}>
                    {children}
            </div>
       
    )
}

export { ContainerPokemon }