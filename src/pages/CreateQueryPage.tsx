import { useState, type FormEvent } from "react";
import { useSearchParams } from "../router/Router";
import { destinations } from "../data/destinations";
import { packages } from "../data/packages";
import { currentAgent } from "../components/navigation/AccountMenu";
import { CheckIcon } from "../components/icons/Icons";

export function CreateQueryPage() {
  const params = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const presetPackage = params.get("package") ?? "";
  const presetDestination = params.get("destination") ?? "";

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-ivory">
          <CheckIcon size={22} />
        </span>
        <h1 className="mt-5 font-display text-4xl text-ink">Query received</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          Thank you, {currentAgent.name}. The trade desk will reply within one business day with
          availability and a working itinerary.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-16">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">Trade desk</p>
        <h1 className="mt-2 font-display text-5xl text-ink">Create Query</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
          Share the bones of the movement — dates, pax, parks or palaces. We return with lodges,
          permits and a draft you can put in front of the client.
        </p>
        <dl className="mt-10 space-y-4 text-[13px]">
          <div>
            <dt className="text-ink-soft">Logged in as</dt>
            <dd className="font-medium text-ink">
              {currentAgent.name} · {currentAgent.agency}
            </dd>
          </div>
          <div>
            <dt className="text-ink-soft">Usual reply</dt>
            <dd className="font-medium text-ink">Within one business day</dd>
          </div>
        </dl>
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-2xl bg-paper p-6 shadow-[var(--shadow-soft)] ring-1 ring-line sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Agent name" defaultValue={currentAgent.name} />
          <Field label="Agency" defaultValue={currentAgent.agency} />
          <Field label="Travel start" type="date" />
          <Field label="Travel end" type="date" />
          <Field label="Pax (adults)" type="number" defaultValue="2" />
          <Field label="Pax (children)" type="number" defaultValue="0" />
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-medium text-ink-muted">
              Destination interest
              <select
                defaultValue={presetDestination}
                className="mt-1.5 h-11 w-full rounded-md border border-line bg-cream px-3 text-[14px] text-ink"
              >
                <option value="">Select a destination</option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-medium text-ink-muted">
              Related programme
              <select
                defaultValue={presetPackage}
                className="mt-1.5 h-11 w-full rounded-md border border-line bg-cream px-3 text-[14px] text-ink"
              >
                <option value="">No specific programme</option>
                {packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.slug}>
                    {pkg.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[12px] font-medium text-ink-muted">
              Notes for the desk
              <textarea
                rows={4}
                className="mt-1.5 w-full rounded-md border border-line bg-cream px-3 py-2 text-[14px] text-ink"
                placeholder="Lodge preference, park choice, language of guide, budget band…"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex h-11 items-center rounded-md bg-forest px-5 text-[14px] font-semibold text-ivory hover:bg-forest-deep"
        >
          Submit query
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  type = "text",
  defaultValue,
}: {
  label: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block text-[12px] font-medium text-ink-muted">
      {label}
      <input
        type={type}
        defaultValue={defaultValue}
        required={type !== "number"}
        className="mt-1.5 h-11 w-full rounded-md border border-line bg-cream px-3 text-[14px] text-ink"
      />
    </label>
  );
}
