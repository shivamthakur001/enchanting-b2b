import { cn } from "../../utils/cn";
import { Link } from "../../router/Router";
import { ClockIcon } from "../icons/Icons";

type OffersButtonProps = {
  compact?: boolean;
  className?: string;
  onClick?: () => void;
};

export function OffersButton({ compact = false, className, onClick }: OffersButtonProps) {
  return (
    <Link
      to="/offers"
      onClick={onClick}
      className={cn(
        "nav-offer-button inline-flex items-center gap-1.5 rounded-md border font-semibold tracking-[0.01em] shadow-[0_1px_0_rgb(255_255_255/0.14)_inset,0_1px_2px_rgb(90_50_10/0.18)] transition-[background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_4px_12px_-6px_rgb(176_108_48/0.55)] motion-reduce:transition-none",
        compact ? "h-8 px-2.5 text-[12px]" : "h-9 px-3 text-[13px]",
        className,
      )}
    >
      <ClockIcon size={compact ? 13 : 14} />
      <span className="whitespace-nowrap">Limited Time Offers</span>
    </Link>
  );
}
