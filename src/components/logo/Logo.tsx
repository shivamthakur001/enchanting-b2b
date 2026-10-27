import { cn } from "../../utils/cn";
import { Link } from "../../router/Router";
import logoImage from "../../assets/enchanting-mp-logo.png";
type LogoProps = {
  compact?: boolean;
  inverted?: boolean;
  className?: string;
};

export function Logo({ compact = false, inverted = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-2.5 no-underline", className)}
      aria-label="Enchanting Madhya Pradesh home"
    >
      <img
        src={logoImage}
        alt="logo text"
        aria-hidden="true"
        className={cn(
          "shrink-0 object-contain transition-[width,height,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          compact ? "h-12 w-12" : "h-16 w-16",
        )}
      />
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display font-semibold tracking-[0.01em] transition-[font-size,color] duration-200 motion-reduce:transition-none",
            compact ? "text-[25px]" : "text-[25px]",
            inverted ? "text-ivory" : "nav-brand-primary",
          )}
        >
          Enchanting
        </span>
        <span
          className={cn(
            "mt-1 font-sans font-medium uppercase transition-[font-size,letter-spacing,color] duration-200 motion-reduce:transition-none",
            compact ? "text-[11px] tracking-[0.16em]" : "text-[11px] tracking-[0.2em]",
            inverted ? "text-ivory/70" : "nav-brand-secondary",
          )}
        >
          MADHYA PRADESH
        </span>
      </span>
    </Link>
  );
}
