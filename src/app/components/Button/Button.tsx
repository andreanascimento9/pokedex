import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

function Button({ variant, children }: ButtonProps) {
  const variantClassName = variant ? buttonVariants[variant] : "";
  return (
    <button className={`${variantClassName}`} type="button" disabled>
      {children}
    </button>
  );
}
export { Button };
