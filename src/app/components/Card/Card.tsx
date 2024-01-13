import type { CardProps } from "./Card.types"

export default function Card({
	className,
	idPokemon,
	namePokemon,
	typePokemon,
	imagePokemon,
	routePokemon
}: CardProps){

	let	borderColorType
	let	textColorType
	let	bgColorType

	switch (typePokemon){
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
		
		default:
			borderColorType = 'border-[#000000]';
			textColorType = 'text-[#000000]';
			bgColorType = 'bg-[#000000]';
			break;
	}

	/**
	 * ID dos pokemons vem inteiro
	 * usei a função abaixo para converter para o formato:
	 * #001
	 * #010
	 * #100
	 */
	function formatId(id: number) {
		if (id < 10) {
			return `#00${id}`;
		} else if (id < 100) {
			return `#0${id}`;
		} else {
			return `#${id}`;
		}
	}

	let formattedId = formatId(idPokemon);

	return(
		<>
			<div className={`${className} shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer border rounded-lg ${borderColorType} ${textColorType} w-full`}>
				<div className="max-w-[16rem] min-h-[12rem] mx-auto my-auto py-2">
					<div className="text-right">{formattedId}</div>
					<div className="text-center bg-cover bg-no-repeat bg-center mx-auto relative top-6" style={{ backgroundImage: `url(${imagePokemon})`, minHeight: '96px', maxHeight: '120px', maxWidth: '120px', minWidth: '96px' }}></div>
				</div>
				<div className={`text-2xl text-center py-3 ${bgColorType} rounded-b-lg text-white`}>
					{namePokemon}
				</div>
			</div>
		</>
	)
}