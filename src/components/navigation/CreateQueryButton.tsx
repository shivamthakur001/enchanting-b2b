import { cn } from "../../utils/cn";
import { Link } from "../../router/Router";
import { PlusIcon } from "../icons/Icons";

type CreateQueryButtonProps = {
  variant?: "utility" | "nav" | "mobile";
  className?: string;
  onClick?: () => void;
};

export function CreateQueryButton({ variant = "nav", className, onClick }: CreateQueryButtonProps) {
  const styles = {
    utility:
      "nav-query-button h-7 gap-1.5 rounded-md border px-3 text-[12px] font-semibold tracking-[0.02em] shadow-[0_1px_0_rgb(255_255_255/0.08)]",
    nav: "nav-query-button h-9 gap-1.5 rounded-md border px-3.5 text-[13px] font-semibold tracking-[0.01em] shadow-[0_1px_0_rgb(255_255_255/0.12)_inset] hover:shadow-[var(--shadow-lift)]",
    mobile:
      "nav-query-button h-11 w-full justify-center gap-2 rounded-lg border text-[14px] font-semibold",
  } as const;

  return (
    <Link
      to="/create-query"
      onClick={onClick}
      className={cn(
        "inline-flex items-center select-none active:scale-[0.975] active:duration-75 transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:active:transform-none",
        styles[variant],
        className,
      )}
    >
      <PlusIcon size={variant === "utility" ? 12 : 14} />
      Create Query
    </Link>
  );
}
