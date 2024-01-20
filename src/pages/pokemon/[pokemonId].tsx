// src/pages/pokemon/[pokemonId].tsx
import { useRouter } from 'next/router';

const PokemonPage = () => {
  const router = useRouter();
  const { pokemonId } = router.query;

  return (
    <div>
      <h1>Pokemon Page</h1>
      <p>Pokemon ID: {pokemonId}</p>
      {/* Adicione o conteúdo da sua página aqui */}
    </div>
  );
};

export default PokemonPage;
