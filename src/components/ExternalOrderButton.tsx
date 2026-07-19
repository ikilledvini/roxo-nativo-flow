import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { ORDER_URL } from "@/lib/business-config";

type Variant = "primary" | "secondary" | "ghost" | "pill";
type Size = "sm" | "md" | "lg";

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-purple-soft text-white shadow-card hover:shadow-hover hover:-translate-y-[1px]",
  secondary:
    "bg-white text-green-700 border border-green-100 hover:border-green-500 hover:bg-green-100/60",
  ghost: "text-green-700 hover:bg-green-100/70",
  pill: "bg-gradient-green-soft text-white shadow-float",
};

const sizes: Record<Size, string> = {
  sm: "h-11 px-5 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

export const ExternalOrderButton = forwardRef<HTMLAnchorElement, Props>(
  function ExternalOrderButton(
    { variant = "primary", size = "md", children, fullWidth, className = "", href, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        href={href ?? ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          rest["aria-label"] ??
          `${typeof children === "string" ? children : "Fazer meu pedido"}, abre em uma nova aba`
        }
        className={[
          "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight",
          "transition-all duration-200 focus-visible:outline-none",
          "focus-visible:ring-4 focus-visible:ring-green-500/40",
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          className,
        ].join(" ")}
        {...rest}
      >
        {children}
      </a>
    );
  },
);
