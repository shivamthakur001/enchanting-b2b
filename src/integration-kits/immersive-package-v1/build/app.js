"use strict";
const packageNode = document.getElementById('package-public-json');
const packages = JSON.parse(packageNode?.textContent || '[]');
const bySlug = new Map(packages.map(p => [p.slug, p]));
const app = document.getElementById('page-root');
const headerSelect = document.getElementById('package-select');
const header = document.getElementById('site-header');
const photoMap = {
    'exbhp01': { hero: 'sanchi-preview.webp', heroPosition: 'center 50%', cards: ['lake-preview.webp', 'heritage-preview.webp', 'sanchi-preview.webp', 'temple-preview.webp'], days: ['lake-preview.webp', 'sanchi-preview.webp', 'heritage-preview.webp'] },
    'exbhp02': { hero: 'nature-preview.webp', heroPosition: 'center 46%', cards: ['lake-preview.webp', 'sanchi-preview.webp', 'heritage-preview.webp', 'nature-preview.webp', 'temple-preview.webp'], days: ['lake-preview.webp', 'sanchi-preview.webp', 'nature-preview.webp', 'lake-preview.webp'] },
    'exbhp03': { hero: 'safari-preview.webp', heroPosition: 'center 55%', cards: ['lake-preview.webp', 'heritage-preview.webp', 'sanchi-preview.webp', 'nature-preview.webp', 'safari-preview.webp', 'interior-preview.webp', 'temple-preview.webp'], days: ['lake-preview.webp', 'sanchi-preview.webp', 'safari-preview.webp', 'nature-preview.webp', 'lake-preview.webp'] }
};
const imageSrc = (name) => (window.DEMO_ASSETS && window.DEMO_ASSETS[name]) || (name.startsWith('/') || /^https:\/\//.test(name) ? name : `assets/${name}`);
const heroPhoto = (p) => p.media?.hero || (photoMap[p.slug] || photoMap.exbhp01).hero;
const highlightPhoto = (p, i) => p.media?.highlights?.[i] || (photoMap[p.slug] || photoMap.exbhp01).cards[i % (photoMap[p.slug] || photoMap.exbhp01).cards.length];
const dayPhoto = (p, i) => p.media?.itinerary?.[i] || (photoMap[p.slug] || photoMap.exbhp01).days[i % (photoMap[p.slug] || photoMap.exbhp01).days.length];
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const textWithBreaks = (value) => escapeHTML(value).replace(/\r?\n/g, '<br>');
const routeStops = (route) => route.split(/\s+-\s+/).map(s => s.trim()).filter(Boolean);
const routeUnique = (route) => routeStops(route).filter((s, i, a) => i === 0 || s.toLowerCase() !== a[i - 1].toLowerCase());
const formatP = (text) => text.split(/\n\s*\n/g).filter(Boolean).map(par => `<p>${textWithBreaks(par)}</p>`).join('');
const summaryLead = (p) => `A ${p.durationDays}-day journey through ${routeUnique(p.routeRaw).slice(0, 5).join(', ')}${routeUnique(p.routeRaw).length > 5 ? ' and beyond' : ''} — with a complete day-by-day programme.`;
const editorialLead = (p) => `From ${titleForHighlight(p.highlights[0] || 'the first stop', 0)} to ${titleForHighlight(p.highlights[Math.min(1, p.highlights.length - 1)] || 'the next chapter', 1)}, this itinerary brings together the destinations and experiences detailed in the original programme.`;
const thumbnail = (src, alt, load = 'lazy') => `<img src="${escapeHTML(imageSrc(src))}" alt="${escapeHTML(alt)}" loading="${load}" decoding="async">`;
const cleanDay = (x, i) => x || `Day ${String(i + 1).padStart(2, '0')}`;
const factIcon = (s) => {
    const k = s.toLowerCase();
    return k.includes('airport') ? '✈' : k.includes('rail') ? '▤' : k.includes('weather') ? '☀' : k.includes('accommodation') ? '⌂' : k.includes('transport') ? '⇄' : '◈';
};
const titleForHighlight = (raw, index) => {
    const colon = raw.indexOf(':');
    if (colon > 0 && colon < 42)
        return raw.slice(0, colon).trim();
    const lower = raw.toLowerCase();
    if (lower.includes('bharat bhavan'))
        return 'Bharat Bhavan';
    if (lower.includes('bhimbetka'))
        return 'Bhimbetka';
    if (lower.includes('bhojpur') || lower.includes('bhojeshwar'))
        return 'Bhojpur';
    if (lower.includes('sanchi'))
        return 'Sanchi';
    if (lower.includes('pachmarhi'))
        return 'Pachmarhi';
    if (lower.includes('tawa'))
        return 'Tawa Reservoir';
    if (lower.includes('safari') || lower.includes('tiger'))
        return 'Wildlife Safari';
    return `Journey highlight ${String(index + 1).padStart(2, '0')}`;
};
function headerOptions() {
    headerSelect.innerHTML = packages.map(p => `<option value="${escapeHTML(p.slug)}">${escapeHTML(p.code)} · ${escapeHTML(p.title)}</option>`).join('');
    headerSelect.addEventListener('change', () => navigate(headerSelect.value));
    document.getElementById('print-action')?.addEventListener('click', () => window.print());
    document.getElementById('open-packages')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); });
}
function activeSlug() { const current = new URLSearchParams(location.search).get('package')?.toLowerCase(); return current && bySlug.has(current) ? current : packages[0]?.slug; }
function navigate(slug) {
    if (!bySlug.has(slug))
        return;
    try {
        const url = new URL(window.location.href);
        url.searchParams.set('package', slug);
        url.hash = 'top';
        history.pushState({ slug }, '', url.toString());
    }
    catch {
        location.hash = 'top';
    }
    render(slug);
    window.scrollTo({ top: 0, behavior: 'instant' });
}
function hero(p) {
    const media = photoMap[p.slug] || photoMap.exbhp01;
    const stops = routeStops(p.routeRaw);
    return `<section class="hero" id="top" aria-label="Package introduction" style="--hero-pos:${escapeHTML(media.heroPosition)}">
    <div class="hero-art" aria-hidden="true">${thumbnail(heroPhoto(p), p.title, 'eager')}</div>
    <div class="hero-sheen" aria-hidden="true"></div>
    <div class="hero-inner container">
      <div class="eyebrow eyebrow-bright"><span class="eyebrow-line"></span> THE HEART OF INDIA · CURATED JOURNEYS</div>
      <div class="hero-content">
        <div class="tiny-gold">THE JOURNEY COLLECTION <span class="dot">✦</span> ${escapeHTML(p.code)}</div>
        <h1>${escapeHTML(p.title)}</h1>
        <p class="hero-description">${escapeHTML(summaryLead(p))}</p>
        <div class="hero-meta"><span><b class="meta-icon">◷</b>${p.durationDays} days / ${p.durationNights} nights <small>†</small></span><span><b class="meta-icon">⌁</b>${escapeHTML(stops[0] || 'Madhya Pradesh')}</span><span><b class="meta-icon">◇</b>${escapeHTML(p.code)}</span></div>
        <div class="hero-actions"><a class="btn btn-gold" href="#itinerary">Explore the itinerary <span aria-hidden="true">↗</span></a><a class="btn btn-outline" href="#story">Discover this journey <span aria-hidden="true">↓</span></a></div>
      </div>
      <div class="hero-bottom"><span>01 / ${String(packages.length).padStart(2, '0')} · SAMPLE PACKAGE COLLECTION</span><span class="subtle-small">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></span></div>
    </div>
  </section>`;
}
function stickyNav() {
    return `<nav class="page-sections" id="page-nav" aria-label="Package sections"><div class="container section-inner">
  <div class="section-links"><a href="#story">The journey</a><a href="#highlights">Highlights</a><a href="#itinerary">Itinerary</a><a href="#included">Included &amp; excluded</a><a href="#facts">Trip facts</a><a href="#notes">Travel notes</a></div>
  <a class="small-package-code" href="#collection" aria-label="Other sample packages">VIEW OTHER PACKAGES ↗</a></div></nav>`;
}
function story(p) {
    const route = routeStops(p.routeRaw);
    const facts = p.facts.slice(0, 4);
    return `<section class="story-section" id="story"><div class="container story-grid">
   <div class="story-main"><div class="eyebrow"><span class="eyebrow-line"></span>01 / THE STORY OF THE JOURNEY</div>
    <h2>Where every destination<br><em>becomes a story.</em></h2>
    <div class="story-intro"><p>${escapeHTML(editorialLead(p))}</p><p class="story-source">Journey route and programme details are taken from the original package workbook. † Nights are derived as days − 1 and should be verified before publication.</p></div>
    <div class="route-display"><span class="route-label">THE ROUTE</span><div class="route-chips">${route.map((r, i) => `<span class="route-chip">${i > 0 ? '<i aria-hidden="true">→</i>' : ''}${escapeHTML(r)}</span>`).join('')}</div></div>
   </div>
   <aside class="story-aside" aria-label="Quick tour facts"><div class="aside-image">${thumbnail(highlightPhoto(p, 0), 'Journey photograph')}<div class="aside-photocredit">PREVIEW IMAGE · REPLACE WITH YOUR ASSETS</div></div>
   <div class="aside-facts"><div class="asidetitle">A journey at a glance <span>✦</span></div>
   <div class="facts-line"><span>Duration</span><strong>${p.durationDays} days / ${p.durationNights} nights †</strong></div>
   <div class="facts-line"><span>Starts / ends</span><strong>${escapeHTML(route[0] || '—')} / ${escapeHTML(route[route.length - 1] || '—')}</strong></div>
   <div class="facts-line"><span>Itinerary days</span><strong>${p.itineraries.length} chapters</strong></div>
   <div class="facts-line"><span>Journey code</span><strong>${escapeHTML(p.code)}</strong></div>
   </div></aside>
  </div></section>`;
}
function highlights(p) {
    const media = photoMap[p.slug] || photoMap.exbhp01;
    return `<section class="highlight-section" id="highlights"><div class="container">
   <div class="eyebrow eyebrow-bright"><span class="eyebrow-line"></span>02 / HIGHLIGHTS &amp; EXPERIENCES</div>
   <div class="section-head-light"><h2>Experiences that reveal<br><em>the heart of the journey.</em></h2><p>${p.highlights.length} original highlights from the package workbook</p></div>
   <div class="highlight-grid">${p.highlights.map((raw, i) => `<article class="highlight-card"><div class="highlight-photo">${thumbnail(highlightPhoto(p, i), 'Travel image for ' + titleForHighlight(raw, i))}${!p.media?.highlights?.[i] ? `<span class="photo-label">DEMO IMAGE ${String(i + 1).padStart(2, '0')}</span>` : ""}</div><div class="highlight-content"><span class="highlight-num">${String(i + 1).padStart(2, '0')} / ${String(p.highlights.length).padStart(2, '0')}</span><h3>${escapeHTML(titleForHighlight(raw, i))}</h3><p>${escapeHTML(raw)}</p></div></article>`).join('')}</div>
   <p class="photo-disclaimer">Photography shown is demonstrative. Before publishing, map each image to the verified destination photos already in your Enchanting B2B asset folders.</p>
  </div></section>`;
}
function itinerary(p) {
    const media = photoMap[p.slug] || photoMap.exbhp01;
    return `<section class="itinerary-section" id="itinerary"><div class="container">
  <div class="itinerary-heading"><div><div class="eyebrow eyebrow-bright"><span class="eyebrow-line"></span>03 / THE JOURNEY UNFOLDS</div><h2>Your ${p.durationDays}-day<br><em>story, day by day.</em></h2><p>Every day, every detail — exactly as described in the source itinerary.</p></div>
   <div class="itinerary-controls"><button class="micro-button" id="expand-days" type="button">Expand all days <span>＋</span></button><button class="micro-button" id="collapse-days" type="button">Collapse all <span>−</span></button></div></div>
   <div class="timeline">${p.itineraries.map((d, i) => `<div class="timeline-row"><span class="timeline-node" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><details class="day-panel" ${i === 0 ? 'open' : ''}><summary><div class="day-inline"><span class="day-pill">${escapeHTML(cleanDay(d.dayLabel, i))}</span><h3>${escapeHTML(d.title)}</h3></div><span class="day-toggle" aria-hidden="true">＋</span></summary><div class="day-expanded"><div class="day-body">${formatP(d.body)}</div><div class="day-illustration">${thumbnail(dayPhoto(p, i), 'Journey image for day ' + (i + 1))}${!p.media?.itinerary?.[i] ? "<span>DEMO IMAGE · REPLACE BEFORE PUBLISH</span>" : ""}</div></div></details></div>`).join('')}</div>
  </div></section>`;
}
function listSection(p) {
    return `<section class="included-section" id="included"><div class="container">
 <div class="eyebrow"><span class="eyebrow-line"></span>04 / THE DETAILS THAT MATTER</div>
 <h2>Everything you need,<br><em>clearly outlined.</em></h2>
 <div class="included-grid"><div class="terms-card yes-card"><div class="terms-title"><span class="round-icon">✓</span><h3>What's included</h3><small>${p.inclusions.length} items</small></div><ul>${p.inclusions.map(t => `<li>${escapeHTML(t)}</li>`).join('')}</ul></div>
 <div class="terms-card no-card"><div class="terms-title"><span class="round-icon">−</span><h3>What's not included</h3><small>${p.exclusions.length} item${p.exclusions.length === 1 ? '' : 's'}</small></div><ul>${p.exclusions.map(t => `<li>${escapeHTML(t)}</li>`).join('')}</ul></div></div>
 </div></section>`;
}
function factsAndNotes(p) {
    return `<section class="facts-section" id="facts"><div class="container"><div class="section-head-facts"><div><div class="eyebrow"><span class="eyebrow-line"></span>05 / ESSENTIAL INFORMATION</div><h2>Know before<br><em>you go.</em></h2></div><p>Helpful travel details taken directly from this journey's workbook.</p></div>
 <div class="facts-grid">${p.facts.map(f => `<article class="fact-card"><span class="fact-symbol" aria-hidden="true">${factIcon(f.title)}</span><div><h3>${escapeHTML(f.title)}</h3><p>${escapeHTML(f.description)}</p></div></article>`).join('')}</div>
 </div></section>
 <section class="notes-section" id="notes"><div class="container notes-grid"><div><div class="eyebrow"><span class="eyebrow-line"></span>06 / A FEW IMPORTANT THINGS</div><h2>Practical notes<br><em>for smoother journeys.</em></h2><p class="notes-intro">Operational notes have been separated from private pricing and commission terms.</p></div>
 <div class="notes-list">${p.publicNotes.length ? p.publicNotes.map((note, i) => `<div class="note"><span>${String(i + 1).padStart(2, '0')}</span><p>${textWithBreaks(note)}</p></div>`).join('') : '<p>Public travel notes will be added after review.</p>'}</div></div></section>`;
}
function morePackages(p) {
    const others = packages.filter(x => x.slug !== p.slug);
    return `<section class="collection-section" id="collection"><div class="container"><div class="more-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span>CONTINUE EXPLORING</div><h2>More journeys <em>from the heartland.</em></h2></div><span class="collection-count">${packages.length} SAMPLE JOURNEYS</span></div><div class="more-grid">${others.map(x => `<a class="more-card" href="?package=${encodeURIComponent(x.slug)}#top" data-package-link="${escapeHTML(x.slug)}"><div class="more-photo">${thumbnail(heroPhoto(x), 'Journey photo for ' + x.title)}</div><div class="more-content"><span>${escapeHTML(x.code)} · ${x.durationDays} DAYS</span><h3>${escapeHTML(x.title)}</h3><span class="more-link">EXPLORE JOURNEY <b aria-hidden="true">↗</b></span></div></a>`).join('')}</div></div></section>`;
}
function pricePlaceholder() { return `<section class="trade-section" aria-label="Future secure rates section"><div class="container"><div class="trade-box"><div class="trade-emblem">♜</div><div><div class="eyebrow eyebrow-bright">FUTURE AGENT SERVICES</div><h2>Trade rates &amp; quotations</h2><p>Rates, hotel supplements and the pricing calculator will be integrated in a later phase behind proper agent authentication. No confidential pricing is shipped in this public preview.</p></div><span class="locked-state">⌑ &nbsp; NOT CONNECTED YET</span></div></div></section>`; }
function render(slug) {
    const p = bySlug.get(slug);
    if (!p) {
        app.innerHTML = '<div class="container not-found">Package not found.</div>';
        return;
    }
    document.title = `${p.title} | Enchanting B2B Package Preview`;
    headerSelect.value = slug;
    app.innerHTML = hero(p) + stickyNav() + story(p) + highlights(p) + itinerary(p) + listSection(p) + factsAndNotes(p) + pricePlaceholder() + morePackages(p);
    app.querySelector('#expand-days')?.addEventListener('click', () => app.querySelectorAll('.day-panel').forEach(x => x.open = true));
    app.querySelector('#collapse-days')?.addEventListener('click', () => app.querySelectorAll('.day-panel').forEach(x => x.open = false));
    app.querySelectorAll('[data-package-link]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); navigate(a.dataset.packageLink); }));
    app.querySelectorAll('.section-links a').forEach(anchor => anchor.addEventListener('click', () => anchor.blur()));
    header.dataset.current = slug;
}
headerOptions();
window.addEventListener('popstate', () => render(activeSlug()));
render(activeSlug());
