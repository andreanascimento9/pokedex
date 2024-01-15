import next from "next";
import { PaginationProps } from "./Pagination.types";

function Pagination({ currentPage, setCurrentPage, prevTitle, nextTitle, currentPageTitle, className }: PaginationProps) {

    prevTitle = prevTitle || "Anterior";
    nextTitle = nextTitle || "Próximo";
    currentPageTitle = currentPageTitle || "Página";


    return (
        <>

            <div className={`flex items-center space-x-4 ${className}`}>
                <button
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    {prevTitle}
                </button>

                <span className="text-xl font-bold">
                    {currentPageTitle} {currentPage}
                </span>

                <button
                    className="px-4 py-2 border rounded hover:bg-gray-200"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    {nextTitle}
                </button>
            </div>

        </>
    )
}

export { Pagination };