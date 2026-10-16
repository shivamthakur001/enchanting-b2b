import { Link, useParams } from "../router/Router";
import { aboutNavigation } from "../data/navigation";
import { media } from "../data/media";
import { cn } from "../utils/cn";

const content: Record<
  string,
  { title: string; kicker: string; lead: string; body: { heading: string; copy: string }[] }
> = {
  "who-we-are": {
    title: "Who We Are",
    kicker: "A specialist DMC",
    lead: "Enchanting Madhya Pradesh is a destination management company built only for this state — and only for the travel trade.",
    body: [
      {
        heading: "Why a specialist",
        copy: "Madhya Pradesh is too large, too seasonal and too park-led to be a sidebar on a pan-India brochure. Lodge inventory, park gates, monsoon roads and pilgrim calendars need a desk that lives here.",
      },
      {
        heading: "How we work with agents",
        copy: "You retain the client relationship. We handle ground: hotels and lodges, park permits, vehicles, guides, and the quiet logistics that keep a movement elegant.",
      },
      {
        heading: "What we will not do",
        copy: "We do not retail to the public, and we do not compete with our partners. This portal is credentialed for agents, DMCs and inbound houses.",
      },
    ],
  },
  "mp-in-motion": {
    title: "MP in Motion",
    kicker: "Stories & Blogs",
    lead: "Field notes from parks, palaces and the Narmada — written for people who sell the destination, not only visit it.",
    body: [
      {
        heading: "On the desk this season",
        copy: "Shoulder-season Kanha, a quieter reading of Mandu after the rains, and how Kuno is beginning to sit in FIT programmes without overclaiming the sighting.",
      },
      {
        heading: "For your content calendar",
        copy: "Longer pieces can be republished with credit. Short dispatches are cleared for partner newsletters. Visit Marketing Support for stills and reels.",
      },
    ],
  },
  "meet-us": {
    title: "Where to Meet Us",
    kicker: "Roadshows & Events",
    lead: "We would rather sit with you than send another PDF. Here is where the team will be.",
    body: [
      {
        heading: "Upcoming trade dates",
        copy: "Mumbai workshop — 14 April. Delhi one-to-ones — 22–23 April. SATTE follow-up lunches by appointment. Write to the desk for a slot.",
      },
      {
        heading: "In the parks",
        copy: "Familiarisation movements run twice a year, once in the monsoon shoulder and once in peak. Partners who query regularly are first on the list.",
      },
    ],
  },
  fleet: {
    title: "Our Fleet",
    kicker: "On the ground",
    lead: "Vehicles paced for park gates at dawn, city lanes in Orchha, and the long Malwa highway in between.",
    body: [
      {
        heading: "What we run",
        copy: "Innova and similar for FIT. Tempo travellers for small groups. Coaches on the inbound grand tour. Gypsy and canter inside the parks, as the forest department requires.",
      },
      {
        heading: "How we staff them",
        copy: "Drivers who know the gate timings. Chauffeurs who wait without fuss. A backup vehicle on long park-to-park days when the itinerary is tight.",
      },
    ],
  },
};

export function AboutPage() {
  const { slug } = useParams<{ slug: string }>();
  const key = slug && content[slug] ? slug : "who-we-are";
  const page = content[key];

  return (
    <div>
      <section className="relative min-h-[40vh] overflow-hidden">
        <img
          src={key === "fleet" ? media.safari : media.heritageLobby}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-ink/30" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-[1440px] flex-col justify-end px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-ivory/65 uppercase">{page.kicker}</p>
          <h1 className="mt-2 font-display text-5xl text-ivory sm:text-6xl">{page.title}</h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <aside>
          <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">About</p>
          <nav className="flex flex-col gap-1">
            {aboutNavigation.map((item) => {
              const itemSlug = item.href.split("/").pop() ?? "";
              const active = itemSlug === key;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-[14px] transition-colors",
                    active ? "bg-ivory font-medium text-forest-deep" : "text-ink-muted hover:bg-cream hover:text-ink",
                  )}
                >
                  {item.label}
                  {item.description && (
                    <span className="mt-0.5 block text-[12px] font-normal text-ink-soft">{item.description}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </aside>
        <article className="max-w-2xl">
          <p className="text-[18px] leading-relaxed text-ink">{page.lead}</p>
          <div className="mt-10 space-y-8">
            {page.body.map((block) => (
              <section key={block.heading}>
                <h2 className="font-display text-2xl text-ink">{block.heading}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{block.copy}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
