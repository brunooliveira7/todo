import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";
import Skeleton from "./skeleton";

export const inputCheckBoxWrapperVariants = cva(
  `inline-flex items-center justify-center cursor-pointer relative group`
);

export const inputCheckBoxVariants = cva(
  `appearance-none peer flex items-center justify-center transition 
 overflow-hidden 
`,
  {
    variants: {
      variant: {
        none: "",
        default: `border-2 border-solid border-green-base hover:border-green-dark
        hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base 
        group-hover:checked:border-green-dark group-hover:checked:bg-green-dark `,
      },
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  }
);

export const inputCheckBoxIconVariants = cva(
  `absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block
  fill-white`,
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface InputCheckBoxProps
  extends VariantProps<typeof inputCheckBoxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function InputCheckBox({
  variant,
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckBoxProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={inputCheckBoxVariants({ size, variant: "none" })}
      />
    );
  }

  return (
    <label className={inputCheckBoxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckBoxVariants({ variant, size, disabled })}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckBoxIconVariants({ size })} />
    </label>
  );
}
