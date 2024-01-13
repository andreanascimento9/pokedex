import { Button } from "../Button/Button";
import type { HeaderProps } from "./Header.types";

function Header({ title, pokemonSearch }: HeaderProps) {
  return (
    <header>
      <nav className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8571 12C14.8571 13.578 13.578 14.8571 12 14.8571C10.422 14.8571 9.14286 13.578 9.14286 12C9.14286 10.422 10.422 9.14286 12 9.14286C13.578 9.14286 14.8571 10.422 14.8571 12Z"
                fill="#212121"
              />
              <path
                fill-rule="evenodd"
                cdivp-rule="evenodd"
                d="M12 24C18.0454 24 23.0467 19.5296 23.8785 13.7143H16.8502C16.1442 15.7118 14.2392 17.1429 12 17.1429C9.76077 17.1429 7.85579 15.7118 7.14978 13.7143H0.121524C0.953346 19.5296 5.95462 24 12 24ZM7.14978 10.2857H0.121524C0.953346 4.47035 5.95462 0 12 0C18.0454 0 23.0467 4.47035 23.8785 10.2857H16.8502C16.1442 8.28824 14.2392 6.85714 12 6.85714C9.76077 6.85714 7.85579 8.28824 7.14978 10.2857ZM14.8571 12C14.8571 13.578 13.578 14.8571 12 14.8571C10.422 14.8571 9.14286 13.578 9.14286 12C9.14286 10.422 10.422 9.14286 12 9.14286C13.578 9.14286 14.8571 10.422 14.8571 12Z"
                fill="#212121"
              />
            </svg>
          </div>
          <div className="font-bold leading-none text-3xl">{title}</div>
        </div>

        <div>
          {/* <Button variant="default">eae</Button> */}
        </div>
      </nav>

      <div className="w-full">
        <input
          type="search"
					onChange={(event) => pokemonSearch(event.target.value)}
          placeholder="Buscar"
          className="w-full pl-10 pr-4 my-6 py-2 rounded-full border border-gray-300 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-blue-500 focus:placeholder-gray-600"
        />
        <div className="float-left relative text-lg left-4 bottom-[3.25rem]">
          <svg
            width="16"
            height="15"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.44492 7.3262L6.54814 5.42942C6.51221 5.39349 6.46533 5.37474 6.41534 5.37474H6.2091C6.70126 4.80445 6.99968 4.0623 6.99968 3.24984C6.99968 1.45462 5.54507 0 3.74984 0C1.95462 0 0.5 1.45462 0.5 3.24984C0.5 5.04507 1.95462 6.49968 3.74984 6.49968C4.5623 6.49968 5.30445 6.20126 5.87474 5.7091V5.91534C5.87474 5.96533 5.89505 6.01221 5.92942 6.04814L7.8262 7.94492C7.89964 8.01836 8.01838 8.01836 8.09182 7.94492L8.44492 7.59182C8.51836 7.51838 8.51836 7.39964 8.44492 7.3262ZM3.74984 5.74972C2.36866 5.74972 1.24996 4.63102 1.24996 3.24984C1.24996 1.86866 2.36866 0.749963 3.74984 0.749963C5.13102 0.749963 6.24972 1.86866 6.24972 3.24984C6.24972 4.63102 5.13102 5.74972 3.74984 5.74972Z"
              fill="#666666"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
export { Header };
