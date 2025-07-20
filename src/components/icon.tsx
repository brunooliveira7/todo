import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export const iconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps ) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
