export const site = {
  name: "KDK Interests",
  legal: "KDK Interests LLC",
  tagline: "A house of companies. A life of style.",
  city: "Dallas",
  region: "Texas",
} as const;

export const companies = [
  {
    id: "tx",
    name: "KDK TX",
    short: "Homes",
    href: "/tx",
    external: "https://kdktx.com",
    eyebrow: "Property",
    title: "KDK TX",
    lede: "Homes for people who take care of them.",
    summary:
      "Long-term rental homes in Palmer, Ellis County, and the greater Dallas–Fort Worth corridor. Clean, well-kept, and managed with a short line to the people who own them.",
  },
  {
    id: "media",
    name: "KDK Media",
    short: "Stories",
    href: "/media",
    external: "https://kennyanddon.com",
    eyebrow: "Studio",
    title: "KDK Media",
    lede: "Stories with a pulse.",
    summary:
      "The house’s media avenue — film, brand, and the culture around both. A studio for work we believe should be seen, heard, and held to a finish.",
  },
] as const;

export const principles = [
  {
    name: "Stewardship",
    body: "We hold companies and homes as if they were rooms in a house — not chips on a table.",
  },
  {
    name: "Presence",
    body: "Dallas is the center of gravity. The horizon is the world. We stay local without thinking small.",
  },
  {
    name: "Craft",
    body: "A lease, a film, a building held well. The finish is the point, whether anyone is watching.",
  },
  {
    name: "Life",
    body: "Style is not decoration. It is how a place feels to live in, and how a story feels to sit with.",
  },
] as const;

export const property = {
  name: "Palmer Residential Home",
  place: "Palmer, Texas",
  blurb:
    "A spacious home with expansive covered porches, mature shade trees, and an open kitchen that lives as one room. Quiet street. Easy reach of DFW.",
  features: [
    "Expansive covered porches",
    "Large yard with mature trees",
    "Open-concept kitchen & living",
    "Quiet neighborhood",
    "Ellis County · DFW access",
    "Long-term tenants welcome",
  ],
  email: "paige@kdktx.com",
  site: "https://kdktx.com",
} as const;

export const mediaDisciplines = [
  {
    name: "Film",
    body: "Short-form and long-form pictures with a point of view — brand films, portraits, and work that should last past the campaign.",
  },
  {
    name: "Brand",
    body: "Identity, language, and the rooms a company lives in online. Built for the house, offered to partners who want the same standard.",
  },
  {
    name: "Culture",
    body: "Editorial, stills, sound, and the quiet pieces that make a place feel like itself.",
  },
] as const;

export const nav = [
  { label: "The House", href: "/" },
  { label: "KDK TX", href: "/tx" },
  { label: "KDK Media", href: "/media" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
