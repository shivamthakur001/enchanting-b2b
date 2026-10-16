import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { ChevronDownIcon } from "../icons/Icons";

export const currentAgent = {
  name: "Priya Sharma",
  agency: "Horizon Trails",
  initials: "PS",
};

type AccountMenuProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function AccountMenu({ inverted = false, compact = false }: AccountMenuProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDoc = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-2 rounded-full pr-1.5 pl-1 transition-colors duration-150",
          inverted ? "nav-utility-text" : "nav-text nav-hover-bg",
          compact ? "h-8" : "h-8",
        )}
      >
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold tracking-wide",
            inverted ? "nav-utility-avatar" : "bg-forest text-ivory",
          )}
        >
          {currentAgent.initials}
        </span>
        <span className={cn("hidden text-left leading-tight sm:block", compact && "lg:hidden xl:block")}>
          <span className="block text-[12px] font-medium">{currentAgent.name}</span>
          <span className={cn("block text-[10px]", inverted ? "nav-utility-muted" : "text-ink-soft")}>
            {currentAgent.agency}
          </span>
        </span>
        <ChevronDownIcon
          size={12}
          className={cn("opacity-70 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          className="nav-menu-surface absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border py-1.5"
        >
          {["Agency profile", "Saved queries", "Preferences"].map((item) => (
            <button
              key={item}
              type="button"
              role="menuitem"
              className="flex w-full px-3.5 py-2 text-left text-[13px] text-ink-muted hover:bg-ivory hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item}
            </button>
          ))}
          <div className="my-1 h-px bg-line" />
          <button
            type="button"
            role="menuitem"
            className="flex w-full px-3.5 py-2 text-left text-[13px] text-ink-muted hover:bg-ivory hover:text-ink"
            onClick={() => setOpen(false)}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
