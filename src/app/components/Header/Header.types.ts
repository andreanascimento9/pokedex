interface HeaderProps {
  title: string;
	pokemonSearch: (name: string) => void;
  onError: string | null;
}

export type { HeaderProps };
