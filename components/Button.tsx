import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

const variantClasses = {
  primary: "py-1 px-2 rounded-[4px] border border-primary text-primary",
  secondary: "py-1 px-4 rounded-full border border-primary text-primary",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

function Button({ variant = "primary", children, ...props }: ButtonProps) {
  const classes = clsx(variantClasses[variant], props.className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
