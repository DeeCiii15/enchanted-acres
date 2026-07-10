export const heroSlides = [
  { src: "/images/hero-wedding.jpg", alt: "Wedding at Enchanted Acres" },
  { src: "/images/hero-barn.jpg", alt: "The barn at Enchanted Acres" },
  { src: "/images/hero-ceremony.jpg", alt: "Outdoor ceremony at Enchanted Acres" },
];

export const stats = [
  { number: "4,500", unit: "sq ft", label: "Climate-controlled barn" },
  { number: "200", unit: "guests", label: "Maximum seated capacity" },
  { number: "2", unit: "cabins", label: "Bridal & groom suites" },
];

export const features = [
  {
    title: "Our Barn",
    image: "/images/hero-barn.jpg",
    imageAlt: "The barn at Enchanted Acres",
    description:
      "The centerpiece of the Enchanted Acres experience is our 4,500 square foot barn. It boasts a spacious entertainment space, complete with portable stage and bar. Configure the room for practically any type of event — weddings, banquets, reunions, workshops, and more.",
    list: [
      "Heating & cooling",
      "Catering prep room",
      "HD sound system",
      "Large patio area",
      "Outdoor ceremony location",
    ],
    reverse: false,
  },
  {
    title: "Bridal & Groom's Cabins",
    image: "/images/cabin-1.jpg",
    imageAlt: "Bridal cabin at Enchanted Acres",
    description:
      "Our venue is designed with modern weddings in mind. Two cabins — the Bridal Cabin and the Groom's Cabin — are ideal dressing and preparation rooms. Each includes a porch, restroom, and kitchenette.",
    list: [
      "Private porch & restroom",
      "Kitchenette in each cabin",
      "Perfect for getting-ready moments",
    ],
    reverse: true,
  },
  {
    title: "Outdoor Events",
    image: "/images/gallery-1.jpg",
    imageAlt: "Outdoor ceremony at Enchanted Acres",
    description:
      "We are blessed with temperate weather through spring, summer and autumn months. Our expertly manicured landscaping complements the natural trees and brush — whether you envision an idyllic outdoor wedding ceremony or a twilight cocktail party.",
    list: [
      "Manicured grounds & greenery",
      "Outdoor ceremony space",
      "Twilight reception options",
    ],
    reverse: false,
  },
];

export const amenities = [
  {
    title: "Parking & Accessibility",
    description:
      "Gravel parking with two drop-off areas, a lit path to the barn, and an ATV available for guest transport. Fully accessible restrooms.",
  },
  {
    title: "Tables & Chairs Included",
    description:
      "All wedding packages include barn access, cabins, tables, and chairs — everything you need to begin planning your perfect day.",
  },
  {
    title: "Stress-Free Option",
    description:
      "Choose our Stress Free package for setup, cleanup, trash removal, linens, and access to our decoration inventory.",
  },
];

export const galleryImages = [
  { src: "/images/hero-ceremony.jpg", alt: "Outdoor wedding ceremony", className: "gallery-item--tall" },
  { src: "/images/gallery-2.jpg", alt: "Wedding reception in the barn", className: "" },
  { src: "/images/gallery-3.jpg", alt: "Barn interior decorated for wedding", className: "" },
  { src: "/images/gallery-1.jpg", alt: "Enchanted Acres grounds", className: "gallery-item--wide" },
  { src: "/images/gallery-4.jpg", alt: "Wedding couple at venue", className: "" },
  { src: "/images/gallery-5.jpg", alt: "Wedding celebration", className: "" },
  { src: "/images/cabin-2.jpg", alt: "Bridal cabin interior", className: "" },
  { src: "/images/gallery-6.jpg", alt: "Venue details", className: "" },
];

export const packages = [
  {
    tier: "Southern Petite",
    title: "Up to 100 Guests",
    price: "$4,000",
    note: "DIY · One Day",
    features: [
      "Barn, cabins, tables & chairs",
      "9:00 AM – 11:00 PM",
      "1 free rehearsal hour",
      "Stress Free from $4,500",
    ],
    featured: false,
    cta: "Inquire",
    ctaStyle: "outline-light" as const,
  },
  {
    tier: "Enchanted Wedding",
    title: "Up to 150 Guests",
    price: "$4,500",
    note: "DIY · One Day",
    features: [
      "Barn, cabins, tables & chairs",
      "9:00 AM – 11:00 PM",
      "Two-day options available",
      "Stress Free from $5,000",
    ],
    featured: true,
    badge: "Most Popular",
    cta: "Request a Tour",
    ctaStyle: "primary" as const,
  },
  {
    tier: "Grand Ole Wedding",
    title: "Up to 200 Guests",
    price: "$5,000",
    note: "DIY · One Day",
    features: [
      "Full barn for large celebrations",
      "9:00 AM – 11:00 PM",
      "Two-day from $5,700",
      "Stress Free from $5,500",
    ],
    featured: false,
    cta: "Inquire",
    ctaStyle: "outline-light" as const,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#venue", label: "The Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
];

export const contactInfo = {
  address: ["701 Wingert Road", "Greenwood, SC 29649"],
  phones: [
    { href: "tel:+18649921804", label: "(864) 992-1804" },
    { href: "tel:+18649920580", label: "(864) 992-0580" },
  ],
  email: { href: "mailto:info@enchantedacres.events", label: "info@enchantedacres.events" },
  social: [
    { href: "https://www.facebook.com/enchantedacresevents/", label: "Facebook" },
    { href: "https://www.instagram.com/enchantedacresevents/", label: "Instagram" },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=701+Wingert+Road,+Greenwood,+SC+29649&z=14&output=embed",
  formAction: "https://enchantedacres.events/book-now/",
};
