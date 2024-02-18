import clsx from "clsx";
import { forwardRef } from "react";
import type { UIProps } from "../../../props";

export interface ButtonProps extends UIProps.Button {
  size?: "small" | "large";
  color?: "white" | "blue";
  iconButton?: boolean;
  description?: string;
}

export const ButtonSizes = {
  small: clsx("h-[40px]"),
  large: clsx("h-[55px]"),
};

export const ButtonColors = {
  blue: clsx(
    "border-theme-blue bg-theme-blue text-theme-white",
    "hover:text-theme-whiteHover",
    "disabled:bg-theme-gray",
  ),
  white: clsx(
    "border-theme-blue bg-theme-white text-theme-blue",
    "hover:bg-theme-whiteHover",
    "disabled:bg-theme-gray",
  ),
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { type = "button", color = "white", size = "small", iconButton = false, description, className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type === "button" ? "button" : "submit"}
      className={clsx(
        " inline-flex flex-row items-center justify-center gap-[10px] rounded-[5px] border py-4 text-center font-sans",
        ButtonColors[color],
        ButtonSizes[size],
        iconButton ? "px-5" : "px-[30px]",
        className,
      )}
      {...props}
    >
      {!!description && <span>{description}</span>}
    </button>
  );
});

export default Button;