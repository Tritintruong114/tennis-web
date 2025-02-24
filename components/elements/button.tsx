import React from "react";
import { tv } from "tailwind-variants";
import cx from "clsx";

// Create the button with tv variants for color, size, and fullWidth
const button = tv({
  base: "font-satoshi rounded-full uppercase py-3 duration-300",
  variants: {
    color: {
      primary: "bg-highlight-green text-gray-700",
      secondary: "bg-transparent text-gray-700 hover:bg-gray-100 border",
    },
    size: {
      sm: "px-4 text-sm",
      md: "px-6 text-base",
      lg: "px-8 text-lg",
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      size: "sm",
      class: "hover:bg-green-600", // Custom hover effect for small primary buttons
    },
    {
      color: "secondary",
      size: "lg",
      class: "border-2", // Add border for large secondary buttons
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    fullWidth: false,
  },
});

type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string; // Allow external className to override styles
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  className, // Accept external className prop
}) => {
  // Use cx to merge class names
  const buttonClass = button({ color, size, fullWidth });

  return (
    <button className={cx(buttonClass, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
