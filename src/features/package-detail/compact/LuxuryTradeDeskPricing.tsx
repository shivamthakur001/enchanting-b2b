import { useEffect, useId, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import './LuxuryTradeDeskPricing.css';

export type PricingOption = { id: string; label: string };

export type PricingOptions = {
  transport: PricingOption[];
  hotelCategories: PricingOption[];
  addons: PricingOption[];
  mealSupplements: PricingOption[];
  conditions?: string[];
};

export type PricingSelection = {
  adults: number;
  children: number;
  infants: number;
  travelDate: string;
  transportId: string;
  hotelCategoryId: string;
  single: number;
  double: number;
  triple: number;
  addonIds: string[];
  mealSupplementIds: string[];
};

export type PricingEstimate = {
  passengerCount: number;
  occupancyLabel: string;
  occupancyCostLabel: string;
  selectedItems: string[];
  finalCostLabel: string;
  conditions?: string[];
};

export type AgentProfile = { name?: string; email?: string };

export type ExactQuoteDetails = {
  programName: string;
  duration: string;
  hotelCategory: string;
  departureCity: string;
  travellingBy: string;
  passengers: number;
  arrivalDate: string;
  departureDate: string;
  agentName: string;
  agentEmail: string;
  message: string;
  selection: PricingSelection;
};

export type LuxuryTradeDeskPricingProps = {
  packageTitle: string;
  duration: string;
  previewMode?: boolean;
  agentProfile?: AgentProfile;
  options?: PricingOptions;
  estimate?: PricingEstimate;
  onRequestEstimate?: (selection: PricingSelection) => void | Promise<void>;
  onSubmitExactQuote?: (details: ExactQuoteDetails) => void | Promise<void>;
};

const emptySelection: PricingSelection = {
  adults: 1,
  children: 0,
  infants: 0,
  travelDate: '',
  transportId: '',
  hotelCategoryId: '',
  single: 0,
  double: 1,
  triple: 0,
  addonIds: [],
  mealSupplementIds: [],
};

function optionLabel(options: PricingOption[] | undefined, id: string): string {
  return options?.find((option) => option.id === id)?.label ?? '';
}

function Counter({
  label,
  value,
  onChange,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
}) {
  return (
    <div className="ltd-counter">
      <span>{label}</span>
      <div className="ltd-counter-controls">
        <button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(Math.max(min, value - 1))}>−</button>
        <strong aria-live="polite">{value}</strong>
        <button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  );
}

export function LuxuryTradeDeskPricing({
  packageTitle,
  duration,
  previewMode = false,
  agentProfile,
  options,
  estimate,
  onRequestEstimate,
  onSubmitExactQuote,
}: LuxuryTradeDeskPricingProps) {
  const [selection, setSelection] = useState<PricingSelection>(emptySelection);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteError, setQuoteError] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [estimateError, setEstimateError] = useState('');
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const passengerCount = selection.adults + selection.children + selection.infants;
  const update = <K extends keyof PricingSelection>(key: K, value: PricingSelection[K]) =>
    setSelection((current) => ({ ...current, [key]: value }));
  const toggleOption = (key: 'addonIds' | 'mealSupplementIds', id: string) => {
    setSelection((current) => ({
      ...current,
      [key]: current[key].includes(id) ? current[key].filter((item) => item !== id) : [...current[key], id],
    }));
  };

  useEffect(() => {
    if (!quoteOpen) return;
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeQuote();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [quoteOpen]);

  const closeQuote = () => {
    setQuoteOpen(false);
    previouslyFocusedRef.current?.focus();
  };

  const openQuote = () => {
    setQuoteError('');
    setQuoteSubmitted(false);
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setQuoteOpen(true);
  };

  const requestEstimate = async () => {
    if (!onRequestEstimate) return;
    setEstimateError('');
    try {
      await onRequestEstimate(selection);
    } catch (error) {
      console.error('[LuxuryTradeDeskPricing] Estimate request failed', error);
      setEstimateError('The secure estimate could not be retrieved. Please try again.');
    }
  };

  const submitQuote = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!onSubmitExactQuote) {
      setQuoteError('Quotation submission is not connected yet. Please contact the trade desk.');
      return;
    }
    const form = new FormData(event.currentTarget);
    const details: ExactQuoteDetails = {
      programName: packageTitle,
      duration,
      hotelCategory: optionLabel(options?.hotelCategories, selection.hotelCategoryId),
      departureCity: String(form.get('departureCity') ?? ''),
      travellingBy: optionLabel(options?.transport, selection.transportId),
      passengers: passengerCount,
      arrivalDate: String(form.get('arrivalDate') ?? ''),
      departureDate: String(form.get('departureDate') ?? ''),
      agentName: String(form.get('agentName') ?? ''),
      agentEmail: String(form.get('agentEmail') ?? ''),
      message: String(form.get('message') ?? ''),
      selection,
    };
    try {
      await onSubmitExactQuote(details);
      setQuoteSubmitted(true);
    } catch (error) {
      console.error('[LuxuryTradeDeskPricing] Quote submission failed', error);
      setQuoteError('The quotation could not be submitted. Please try again.');
    }
  };

  const connected = Boolean(options);

  return (
    <div className="ltd" aria-labelledby={titleId}>
      <div className="ltd-header">
        <div>
          <span className="ltd-kicker">Luxury Trade Desk</span>
          <h3 id={titleId}>Build your client journey</h3>
          <p>Configure the essentials below. Your secure trade rate will be supplied by the authorised desk.</p>
        </div>
        <span className={`ltd-status ${connected ? 'is-ready' : ''}`} role="status">
        <span aria-hidden="true">✦</span> {previewMode ? 'LOCAL UI PREVIEW' : connected ? 'OPTIONS READY' : 'AWAITING SECURE RATES'}
        </span>
      </div>

      <div className="ltd-layout">
        <div className="ltd-configuration">
          <section className="ltd-panel" aria-labelledby={`${titleId}-travellers`}>
            <div className="ltd-panel-heading"><span>01</span><h4 id={`${titleId}-travellers`}>Travellers & dates</h4></div>
            <div className="ltd-field-grid">
              <label className="ltd-field"><span>Adults</span><input type="number" min="1" value={selection.adults} onChange={(event) => update('adults', Math.max(1, Number(event.target.value) || 1))} /></label>
              <label className="ltd-field"><span>Children</span><input type="number" min="0" value={selection.children} onChange={(event) => update('children', Math.max(0, Number(event.target.value) || 0))} /></label>
              <label className="ltd-field"><span>Infants</span><input type="number" min="0" value={selection.infants} onChange={(event) => update('infants', Math.max(0, Number(event.target.value) || 0))} /></label>
              <label className="ltd-field ltd-field-wide"><span>Travel date</span><input type="date" value={selection.travelDate} onChange={(event) => update('travelDate', event.target.value)} /></label>
            </div>
          </section>

          <section className="ltd-panel" aria-labelledby={`${titleId}-stay`}>
            <div className="ltd-panel-heading"><span>02</span><h4 id={`${titleId}-stay`}>Journey preferences</h4></div>
            <div className="ltd-field-grid">
              <label className="ltd-field"><span>Transport</span><select value={selection.transportId} onChange={(event) => update('transportId', event.target.value)} disabled={!options?.transport.length}><option value="">{connected ? 'Select transport' : 'Not connected'}</option>{options?.transport.map((option) => <option value={option.id} key={option.id}>{option.label}</option>)}</select></label>
              <label className="ltd-field"><span>Hotel category</span><select value={selection.hotelCategoryId} onChange={(event) => update('hotelCategoryId', event.target.value)} disabled={!options?.hotelCategories.length}><option value="">{connected ? 'Select category' : 'Not connected'}</option>{options?.hotelCategories.map((option) => <option value={option.id} key={option.id}>{option.label}</option>)}</select></label>
            </div>
            <div className="ltd-subheading">Occupancy</div>
            <div className="ltd-counter-grid">
              <Counter label="Single" value={selection.single} onChange={(value) => update('single', value)} />
              <Counter label="Double" value={selection.double} onChange={(value) => update('double', value)} />
              <Counter label="Triple" value={selection.triple} onChange={(value) => update('triple', value)} />
            </div>
          </section>

          <section className="ltd-panel" aria-labelledby={`${titleId}-extras`}>
            <div className="ltd-panel-heading"><span>03</span><h4 id={`${titleId}-extras`}>Addons & meal supplements</h4></div>
            {!connected ? <p className="ltd-unavailable">Available options will appear here once the secure pricing service is connected.</p> : (
              <div className="ltd-check-groups">
                <fieldset><legend>Addons</legend>{(options?.addons ?? []).map((option) => <label key={option.id}><input type="checkbox" checked={selection.addonIds.includes(option.id)} onChange={() => toggleOption('addonIds', option.id)} />{option.label}</label>)}</fieldset>
                <fieldset><legend>Meal supplements</legend>{(options?.mealSupplements ?? []).map((option) => <label key={option.id}><input type="checkbox" checked={selection.mealSupplementIds.includes(option.id)} onChange={() => toggleOption('mealSupplementIds', option.id)} />{option.label}</label>)}</fieldset>
              </div>
            )}
          </section>
        </div>

        <aside className="ltd-summary" aria-label="Estimated cost summary">
          <span className="ltd-summary-mark" aria-hidden="true">✦</span>
          <span className="ltd-kicker">Trade estimate</span>
          <h4>Journey summary</h4>
          <dl>
            <div><dt>Passengers</dt><dd>{estimate?.passengerCount ?? passengerCount}</dd></div>
            <div><dt>Occupancy</dt><dd>{estimate?.occupancyLabel ?? 'Awaiting selection'}</dd></div>
            <div><dt>Occupancy cost</dt><dd>{estimate?.occupancyCostLabel ?? 'Unavailable'}</dd></div>
          </dl>
          <div className="ltd-selected"><span>Selected addons & supplements</span><strong>{estimate?.selectedItems.length ? estimate.selectedItems.join(', ') : 'None selected'}</strong></div>
          <div className="ltd-total"><span>Final estimated cost</span><strong>{estimate?.finalCostLabel ?? 'Awaiting Backend Estimate'}</strong></div>
          {(estimate?.conditions ?? options?.conditions)?.length ? <ul className="ltd-conditions">{(estimate?.conditions ?? options?.conditions)?.map((condition) => <li key={condition}>{condition}</li>)}</ul> : <p className="ltd-unavailable">Authoritative conditions and rates will be returned by the backend.</p>}
          {estimateError && <p className="ltd-form-error" role="alert">{estimateError}</p>}
          <button type="button" className="ltd-primary" onClick={requestEstimate} disabled={!onRequestEstimate}>Request secure estimate <span aria-hidden="true">→</span></button>
          <button type="button" className="ltd-secondary" onClick={openQuote}>Get Exact Quote <span aria-hidden="true">↗</span></button>
        </aside>
      </div>

      {quoteOpen && (
        <div className="ltd-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeQuote(); }}>
          <div className="ltd-modal" role="dialog" aria-modal="true" aria-labelledby={`${titleId}-quote`}>
            <button type="button" className="ltd-modal-close" ref={closeButtonRef} aria-label="Close exact quote form" onClick={closeQuote}>×</button>
            <span className="ltd-kicker">Private quotation request</span>
            <h3 id={`${titleId}-quote`}>Get an exact quote</h3>
            {quoteSubmitted ? <div className="ltd-confirmation" role="status">Submission will be enabled after secure Supabase integration.</div> : (
              <form onSubmit={submitQuote}>
                <fieldset><legend>Trip details</legend><div className="ltd-modal-grid"><label className="ltd-field"><span>Tour program name</span><input value={packageTitle} readOnly /></label><label className="ltd-field"><span>Duration</span><input value={duration} readOnly /></label><label className="ltd-field ltd-field-wide"><span>Hotel category</span><input value={optionLabel(options?.hotelCategories, selection.hotelCategoryId) || 'To be confirmed'} readOnly /></label></div></fieldset>
                <fieldset><legend>Travel preferences</legend><div className="ltd-modal-grid"><label className="ltd-field"><span>Departure city</span><input name="departureCity" required /></label><label className="ltd-field"><span>Travelling by</span><input value={optionLabel(options?.transport, selection.transportId) || 'To be confirmed'} readOnly /></label><label className="ltd-field"><span>Passengers</span><input value={passengerCount} readOnly /></label><label className="ltd-field"><span>Arrival date</span><input name="arrivalDate" type="date" required /></label><label className="ltd-field"><span>Departure date</span><input name="departureDate" type="date" required /></label></div></fieldset>
                <fieldset><legend>Agent details</legend><div className="ltd-modal-grid"><label className="ltd-field"><span>Agent name</span><input name="agentName" defaultValue={agentProfile?.name ?? ''} required /></label><label className="ltd-field"><span>Agent email</span><input name="agentEmail" type="email" defaultValue={agentProfile?.email ?? ''} required /></label><label className="ltd-field ltd-field-wide"><span>Optional message</span><textarea name="message" rows={3} /></label></div></fieldset>
                {quoteError && <p className="ltd-form-error" role="alert">{quoteError}</p>}
                <p className="ltd-preview-note">UI preview only. Dashboard enquiry submission will become available after secure Supabase integration.</p>
                <button type="submit" className="ltd-primary">Submit quotation request <span aria-hidden="true">→</span></button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
