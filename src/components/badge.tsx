import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const badgeVariants = cva("inline-flex items-center rounded-full", {
  variants: {
    variant: {
      primary: "bg-green-light",
      secondary: "bg-pink-light",
    },
    size: {
      sm: "px-2 py-0.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  variant,
  size,
  className,
  children,
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
