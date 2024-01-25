

import { PokemonStatusProps } from "./PokemonStatus.types";

function PokemonStatus({ typePokemon }: PokemonStatusProps) {

    const typePokemonName = typePokemon

    let borderColorType
    let textColorType
    let bgColorType

    switch (typePokemon) {
        case 'fire':
            borderColorType = 'border-[#F57D31]';
            textColorType = 'text-[#F57D31]';
            bgColorType = 'bg-[#F57D31]';
            break;

        case 'grass':
            borderColorType = 'border-[#74CB48]';
            textColorType = 'text-[#74CB48]';
            bgColorType = 'bg-[#74CB48]';
            break;

        case 'water':
            borderColorType = 'border-[#6493EB]';
            textColorType = 'text-[#6493EB]';
            bgColorType = 'bg-[#6493EB]';
            break;

        case 'normal':
            borderColorType = 'border-[#AAA67F]';
            textColorType = 'text-[#AAA67F]';
            bgColorType = 'bg-[#AAA67F]';
            break;

        case 'bug':
            borderColorType = 'border-[#A7B723]';
            textColorType = 'text-[#A7B723]';
            bgColorType = 'bg-[#A7B723]';
            break;

        case 'eletric':
            borderColorType = 'border-[#F9CF30]';
            textColorType = 'text-[#F9CF30]';
            bgColorType = 'bg-[#F9CF30]';
            break;

        case 'ghost':
            borderColorType = 'border-[#70559B]';
            textColorType = 'text-[#70559B]';
            bgColorType = 'bg-[#70559B]';
            break;

        case 'psychic':
            borderColorType = 'border-[#FB5584]';
            textColorType = 'text-[#FB5584]';
            bgColorType = 'bg-[#FB5584]';
            break;

        case 'steel':
            borderColorType = 'border-[#B7B9D0]';
            textColorType = 'text-[#B7B9D0]';
            bgColorType = 'bg-[#B7B9D0]';
            break;

        case 'poison':
            borderColorType = 'border-[#730bdd]';
            textColorType = 'text-[#730bdd]';
            bgColorType = 'bg-[#730bdd]';
            break;

        case 'fairy':
            borderColorType = 'border-[#d0a8b0]';
            textColorType = 'text-[#d0a8b0]';
            bgColorType = 'bg-[#d0a8b0]';
            break;

        case 'ground':
            borderColorType = 'border-[#BE8F65]';
            textColorType = 'text-[#BE8F65]';
            bgColorType = 'bg-[#BE8F65]';
            break;

        case 'fighting':
            borderColorType = 'border-[#CC0000]';
            textColorType = 'text-[#CC0000]';
            bgColorType = 'bg-[#CC0000]';
            break;

        case 'rock':
            borderColorType = 'border-[#aaaaaa]';
            textColorType = 'text-[#aaaaaa]';
            bgColorType = 'bg-[#aaaaaa]';
            break;

        case 'electric':
            borderColorType = 'border-[#ffde00]';
            textColorType = 'text-[#ffde00]';
            bgColorType = 'bg-[#ffde00]';
            break;

        case 'ice':
            borderColorType = 'border-[#a8c3dd]';
            textColorType = 'text-[#a8c3dd]';
            bgColorType = 'bg-[#a8c3dd]';
            break;

        case 'dragon':
            borderColorType = 'border-[#757cbb]';
            textColorType = 'text-[#757cbb]';
            bgColorType = 'bg-[#757cbb]';
            break;

        default:
            borderColorType = 'border-[#000000]';
            textColorType = 'text-[#000000]';
            bgColorType = 'bg-[#000000]';
            break;
    }


    return (
        <>
            <div className="mx-2">
                <div className={`bg-white max-w-5xl mx-auto px-4 py-6 rounded-lg`}>


                    {Object.keys(typePokemon).map((key, index) => (

                        
                        <div key={index}>{typePokemon[key]?.type?.name}</li>
                    ))}


                </div>
            </div>
        </>
    )
}

export { PokemonStatus }