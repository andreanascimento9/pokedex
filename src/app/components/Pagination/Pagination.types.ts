import { MouseEventHandler } from "react";

interface PaginationProps {
    onClick?: MouseEventHandler;
    currentPage: number;
    
    //isso se usa para tipar estado?
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

    prevTitle?: string;
    nextTitle?: string;
    currentPageTitle?: string;
    className?: string;
}

export type { PaginationProps }