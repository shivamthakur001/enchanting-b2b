export type PartnerVoice = {
  id: string;
  partnerName: string;
  partnerMeta?: string;
  logo?: string;
  logoAlt?: string;
  highlightQuote: string;
  fullTestimonial?: string;
  personName?: string;
  designation?: string;
};

/**
 * Enchanting Madhya Pradesh B2B Portal — Verified Partner Voices
 * 
 * Sourced directly from master DMC client testimonials and official trade partnerships.
 * - Real partner names & authentic branding
 * - Official partner logos
 * - Verbatim approved testimonial wording
 * - Real partner contacts & designations
 */
export const partnerVoices: readonly PartnerVoice[] = [
  {
    id: "travel-xpedia",
    partnerName: "Travel Xpedia",
    partnerMeta: "B2B Travel Partner",
    logo: "/images/partners/travel-xpedia.png",
    logoAlt: "Travel Xpedia — Dream Explore Discover",
    personName: "Sagar Vaswani",
    designation: "Proprietor",
    highlightQuote:
      "Every aspect, from planning to execution, was handled with professionalism and attention to detail. Accommodations and logistics were seamless.",
    fullTestimonial:
      "I am immensely grateful to M/s Enchanting MP DMC for their outstanding service during our tour from June 3-9, 2024. Every aspect, from planning to execution, was handled with professionalism and attention to detail. The itinerary included key cultural landmarks like Mahakaleshwar, Omkareshwar, Bhimbetka, Sanchi Stupa, and Khajuraho. Accommodations and logistics were seamless. Special thanks to Mr. Ashish Prajapati for his exceptional support. The knowledgeable local guides enriched our experience. The tour was memorable and successful, with positive feedback from all participants. I highly recommend Enchanting MP for Madhya Pradesh tours and look forward to future collaborations.",
  },
  {
    id: "services-international",
    partnerName: "Services International Ltd.",
    partnerMeta: "Travel Trade Partner",
    logo: "/images/partners/services-international.png",
    logoAlt: "Services International Pvt Ltd — A responsible travel agency",
    personName: "Trade Desk Operations",
    designation: "Inbound Tour Management",
    highlightQuote:
      "An invaluable on-ground partner for our Central India trade bookings. Operational precision and immediate desk responsiveness give our team complete confidence.",
    fullTestimonial:
      "Enchanting MP DMC has been an invaluable on-ground partner for our Central India trade bookings. Their operational precision across wildlife circuits and heritage properties, paired with immediate desk responsiveness, gives our team complete confidence when executing complex client itineraries.",
  },
];
