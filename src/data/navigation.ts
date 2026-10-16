import type { MarketingCategory, NavLinkItem, OfferingGroup } from "../types";

export const NAV_TIMING_MS = 220;
export const MENU_CLOSE_DELAY_MS = 180;
export const HEADER_UTILITY_HEIGHT = 36;
export const HEADER_MAIN_HEIGHT = 76;
export const HEADER_STICKY_HEIGHT = 64;

export const offeringsNavigation: OfferingGroup[] = [
  {
    id: "tailor-made",
    label: "Tailor-Made & Specialized",
    items: [
      {
        id: "inbound",
        label: "Inbound Market Specialist Tours",
        href: "/packages?category=inbound",
        description: "Fully hosted programmes for overseas trade partners",
      },
      {
        id: "fit",
        label: "Customized FIT Tours",
        href: "/packages?category=fit",
        description: "Private itineraries shaped around your clients",
      },
      {
        id: "special-interest",
        label: "Special Interest Tours",
        href: "/packages?category=special-interest",
        description: "Wildlife, architecture, craft and conservation",
      },
    ],
  },
  {
    id: "group-travel",
    label: "Group Travel",
    items: [
      {
        id: "group",
        label: "Group Departures",
        href: "/packages?category=group",
        description: "Scheduled and private group movements",
      },
      {
        id: "school",
        label: "School Group Packages",
        href: "/packages?category=school",
        description: "Curriculum-led field programmes",
      },
      {
        id: "college",
        label: "College Group Packages",
        href: "/packages?category=college",
        description: "Architecture, history and ecology studios",
      },
    ],
  },
];

export const aboutNavigation: NavLinkItem[] = [
  {
    id: "who-we-are",
    label: "Who We Are",
    href: "/about/who-we-are",
    description: "A specialist DMC for Madhya Pradesh",
  },
  {
    id: "mp-in-motion",
    label: "MP in Motion",
    href: "/about/mp-in-motion",
    description: "Stories & Blogs",
  },
  {
    id: "meet-us",
    label: "Where to Meet Us",
    href: "/about/meet-us",
    description: "Roadshows & Events",
  },
  {
    id: "fleet",
    label: "Our Fleet",
    href: "/about/fleet",
    description: "Vehicles paced for park, city and highway",
  },
];

export const marketingSupportNavigation: (NavLinkItem & { category: MarketingCategory; icon: "image" | "play" | "file" | "layers" })[] = [
  {
    id: "pictures",
    label: "Destination Pictures",
    href: "/marketing-support?category=pictures",
    description: "Editorial stills for proposals and social",
    category: "pictures",
    icon: "image",
  },
  {
    id: "reels",
    label: "Destination Reels",
    href: "/marketing-support?category=reels",
    description: "Short films ready for your channels",
    category: "reels",
    icon: "play",
  },
  {
    id: "destination-flyers",
    label: "Destination Flyers",
    href: "/marketing-support?category=destination-flyers",
    description: "Print-ready destination one-pagers",
    category: "destination-flyers",
    icon: "file",
  },
  {
    id: "package-flyers",
    label: "Package Flyers",
    href: "/marketing-support?category=package-flyers",
    description: "Sellable circuit sheets for the desk",
    category: "package-flyers",
    icon: "layers",
  },
];

export const offeringFilterMap: Record<string, string> = {
  inbound: "inbound",
  fit: "fit",
  "special-interest": "special-interest",
  group: "group",
  school: "school",
  college: "college",
};

export const marketingCategoryLabels: Record<MarketingCategory, string> = {
  pictures: "Destination Pictures",
  reels: "Destination Reels",
  "destination-flyers": "Destination Flyers",
  "package-flyers": "Package Flyers",
};
