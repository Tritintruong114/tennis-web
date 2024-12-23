import React from "react";
import { tv } from "tailwind-variants";
import cx from "clsx";

// Create the input styles with tv variants
const input = tv({
  base: "rounded-full w-[300px] px-6 py-3 bg-transparent placeholder:text-black/60 border-2 duration-300", // base styles
  variants: {
    color: {
      primary: "border-highlight-green placeholder:text-white/60",
      secondary: "border-4 placeholder:text-black/60",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
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
      class: "border-2", // Add border styling for small primary inputs
    },
    {
      color: "secondary",
      size: "lg",
      class: "border-4", // Custom border size for large secondary inputs
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    fullWidth: false,
  },
});

type InputProps = {
  placeholder: string;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string; // For overriding external class names
};

const Input: React.FC<InputProps> = ({
  placeholder,
  color = "primary",
  size = "md",
  fullWidth = false,
  className, // External className prop
}) => {
  // Generate the class names for the input
  const inputClass = input({ color, size, fullWidth });

  return (
    <input
      className={cx(inputClass, className)} // Merge inputClass and any external className
      placeholder={placeholder}
    />
  );
};

export default Input;
