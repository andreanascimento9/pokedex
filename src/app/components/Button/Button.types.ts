import { MouseEventHandler } from "react";
import { buttonVariants } from "./Button.styles";

interface ButtonProps {
  //keyof é para destacar que só pode receber variantes dentro da const buttonVariants
  //typeof é necessário para obter o tipo da variável, ao inves do valor real
  variant?: keyof typeof buttonVariants;
  children: string;

  //?:, isso indica que ela não é obrigatória e pode ter um valor undefined
  //caso não seja fornecida ao utilizar o componente.
  onClick?: MouseEventHandler;
}

export type { ButtonProps };
