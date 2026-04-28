export type Tier = {
    name: string;
    slots: string;
    price: string;
    tickets: string;
    perks: string[];
    accent: "platinum" | "gold" | "silver";
};

export const tiers: Tier[] = [
    {
        name: "Platinum",
        slots: "1 slot",
        price: "On request",
        tickets: "10 tickets",
        accent: "platinum",
        perks: [
            "“Lisbon AI presented in partnership with [Brand]” co-branding across all materials",
            "Opening keynote welcome address (10 min, day of your choice)",
            "Largest booth at prime location with setup assistance",
            "Official evening party fully branded on behalf of sponsor",
            "Logo on website, main stage screens, between-session slides, all communications",
            "Option for speaking slot in a relevant topic",
            "Dedicated social series (X, LinkedIn, Instagram) — company, AI work & Lisbon AI presence",
            "24h content approval right",
            "Promotional video (~1 min)",
            "Credits on all recordings",
            "Invitation for 3 to join exclusive speakers’ dinner",
        ],
    },
    {
        name: "Gold",
        slots: "3 slots",
        price: "On request",
        tickets: "7 tickets",
        accent: "gold",
        perks: [
            "Logo on website, main stage screens, between-session slides, communications",
            "Option to brand a specific zone (e.g. “The [Brand] Lounge”)",
            "2 dedicated social posts — before and after the event",
            "Named in opening remarks",
            "Invitation for 2 to join exclusive speakers’ dinner",
        ],
    },
    {
        name: "Silver",
        slots: "5 slots",
        price: "On request",
        tickets: "5 tickets",
        accent: "silver",
        perks: [
            "Standard booth with setup assistance",
            "Logo on website, main stage screens, between-session slides, communications",
            "Dedicated announcement post on social media",
            "1 dedicated social post — before the event",
            "Collective thanks in opening remarks",
            "Invitation for 1 to join exclusive speakers’ dinner",
        ],
    },
];

export type AddOn = {
    name: string;
    price: string;
    description: string;
};

export const addOns: AddOn[] = [
    {
        name: "Hacker Hub",
        price: "€4,000",
        description:
            "Brand the dedicated hands-on space; station engineers or DevRels to run demos or challenges.",
    },
    {
        name: "Networking Reception",
        price: "€5,000 – €8,000",
        description:
            "Host the official evening event; brief welcome address; full branding at the reception.",
    },
    {
        name: "Lunch Sponsorship",
        price: "€3,500",
        description:
            "Brand the main lunch break; 20–30 min informal interview during the slot.",
    },
    {
        name: "Code & Coffee",
        price: "€1,000 / day",
        description:
            "Branded cups and signage at coffee stations — the first brand attendees see each morning.",
    },
    {
        name: "Tote Bags / T-Shirts",
        price: "TBD",
        description:
            "Co-branded merchandise distributed to all attendees.",
    },
];

export type AudienceCompany = {
    name: string;
    note: string;
};

export const audienceCompanies: AudienceCompany[] = [
    { name: "Databricks", note: "data/AI platform" },
    { name: "Poolside", note: "AI coding" },
    { name: "ElevenLabs", note: "AI voice" },
    { name: "Zendesk", note: "enterprise SaaS" },
    { name: "Vercel", note: "dev infrastructure" },
    { name: "Lovable", note: "AI platform" },
    { name: "Hugging Face", note: "AI platform" },
    { name: "Sword Health", note: "health tech" },
    { name: "Netlify", note: "dev infrastructure" },
    { name: "Prisma", note: "dev tools" },
];

export const pastStats = [
    { label: "Attendees", value: "327", note: "109% capacity" },
    { label: "Applications", value: "707", note: "for 2025" },
    { label: "Sell-through", value: "100%", note: "in 135 days" },
    { label: "NPS", value: "+67", note: "vs. +40 industry avg." },
    { label: "Avg. experience", value: "8.4/10", note: "from attendees" },
    { label: "Would attend again", value: "100%", note: "post-event survey" },
];

export const reachStats = [
    { value: "99k", label: "LinkedIn impressions", note: "full year, 100% organic" },
    { value: "124k", label: "X impressions", note: "full year, 100% organic" },
    { value: "Live", label: "Stream views", note: "every talk, every year" },
];

export const eventDetails = [
    { label: "Date", value: "September 23 – 24, 2026" },
    { label: "Location", value: "Champalimaud, Belém (Lisbon)" },
    { label: "Format", value: "2 days · talks, interviews & demos" },
    { label: "Capacity", value: "400 attendees" },
    { label: "Audience", value: "Engineers, founders, researchers" },
];
