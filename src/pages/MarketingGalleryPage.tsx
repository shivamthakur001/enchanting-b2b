import { useMemo, useState } from "react";
import { Link, useSearchParams } from "../router/Router";
import { marketingCategoryLabels } from "../data/navigation";
import { getMarketingByCategory } from "../data/marketing";
import type { MarketingCategory } from "../types";
import { cn } from "../utils/cn";
import { DownloadIcon, marketingIcons } from "../components/icons/Icons";

const tabs: { id: "all" | MarketingCategory; label: string }[] = [
  { id: "all", label: "All resources" },
  { id: "pictures", label: marketingCategoryLabels.pictures },
  { id: "reels", label: marketingCategoryLabels.reels },
  { id: "destination-flyers", label: marketingCategoryLabels["destination-flyers"] },
  { id: "package-flyers", label: marketingCategoryLabels["package-flyers"] },
];

export function MarketingGalleryPage() {
  const params = useSearchParams();
  const categoryParam = params.get("category") as MarketingCategory | null;
  const category: "all" | MarketingCategory =
    categoryParam && categoryParam in marketingCategoryLabels ? categoryParam : "all";
  const assets = getMarketingByCategory(category);
  const [selected, setSelected] = useState<string[]>([]);

  const heading = category === "all" ? "Marketing Support" : marketingCategoryLabels[category];

  const selectedCount = selected.length;
  const allIds = useMemo(() => assets.map((a) => a.id), [assets]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">For the trade desk</p>
      <h1 className="mt-2 font-display text-5xl text-ink">{heading}</h1>
      <p className="mt-3 max-w-2xl text-[15px] text-ink-muted">
        Pictures, reels and flyers cleared for partner use. Browse, select and download — a fuller
        media library will follow on this same route.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.id === "all" ? "/marketing-support" : `/marketing-support?category=${tab.id}`}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-[12.5px] font-medium ring-1 transition-colors",
              category === tab.id ? "bg-forest text-ivory ring-forest" : "bg-paper text-ink-muted ring-line hover:text-ink",
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-paper px-4 py-3">
        <p className="text-[13px] text-ink-muted">
          {selectedCount > 0 ? `${selectedCount} selected` : `${assets.length} assets`}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="h-9 rounded-md px-3 text-[12px] font-medium text-ink-muted hover:bg-ivory"
            onClick={() => setSelected(selectedCount === allIds.length ? [] : allIds)}
          >
            {selectedCount === allIds.length ? "Clear" : "Select all"}
          </button>
          <button
            type="button"
            disabled={selectedCount === 0}
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-forest px-3 text-[12px] font-semibold text-ivory disabled:opacity-40"
          >
            <DownloadIcon size={14} /> Download
          </button>
        </div>
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {assets.map((asset) => {
          const checked = selected.includes(asset.id);
          const Icon = asset.category === "reels" ? marketingIcons.play : asset.category.includes("flyer") ? marketingIcons.file : marketingIcons.image;
          return (
            <li key={asset.id}>
              <label
                className={cn(
                  "block cursor-pointer overflow-hidden rounded-2xl bg-paper ring-1 transition-shadow",
                  checked ? "ring-forest shadow-[var(--shadow-soft)]" : "ring-line",
                )}
              >
                <span className="relative block aspect-[16/10]">
                  <img src={asset.image} alt="" className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-md bg-paper/90 text-forest">
                    <Icon size={15} />
                  </span>
                  <input
                    type="checkbox"
                    className="absolute top-3 right-3 h-4 w-4 accent-forest"
                    checked={checked}
                    onChange={() =>
                      setSelected((curr) =>
                        curr.includes(asset.id) ? curr.filter((id) => id !== asset.id) : [...curr, asset.id],
                      )
                    }
                    aria-label={`Select ${asset.title}`}
                  />
                </span>
                <span className="block p-4">
                  <span className="block text-[15px] font-medium text-ink">{asset.title}</span>
                  <span className="mt-1 block text-[12px] text-ink-soft">
                    {asset.typeLabel}
                    {asset.destination ? ` · ${asset.destination}` : ""} · Updated {asset.updated}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
