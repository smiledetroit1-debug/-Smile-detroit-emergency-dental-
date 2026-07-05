import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "red";
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-[#174A8B] text-white shadow-xl shadow-blue-900/20 hover:bg-[#0E376A]",
  secondary:
    "bg-white text-gray-950 ring-1 ring-gray-200 hover:bg-gray-50",
  dark: "bg-gray-950 text-white hover:bg-gray-800",
  red: "bg-red-600 text-white shadow-xl shadow-red-600/20 hover:bg-red-700",
};

export function CTAButton({
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: CTAButtonProps) {
  return (
    <a
      className={`inline-flex min-w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-black transition duration-300 hover:-translate-y-1 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </a>
  );
}