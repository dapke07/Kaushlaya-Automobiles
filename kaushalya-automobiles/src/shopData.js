// ------------------------------------------------------------------
// SHOP DATA — edit everything about the business from this one file.
// ------------------------------------------------------------------

export const shop = {
  name: "Kaushalya Automobiles",
  nameMarathi: "कौशल्या ऑटोमोबाइल्स",
  tagline: "Quality Auto Parts. Trusted Performance.",
  establishedYear: 2018, // [YEAR]
  ownerName: "Laxman Umakant Jadhav", // [OWNER NAME]
  experienceYears: new Date().getFullYear() - 2018,
  address:
    "Kaushalya Automobiles, Udgir–Bidar Road, Balasaheb Thackeray Chowk, Near Sumangal Hospital, Latur Ring Road Corner, Udgir – 413517", // [FULL ADDRESS]
  phone: "9637014453", // [PHONE NUMBER]
  phoneAlt: "7498616482",
  whatsapp: "919637014453", // [WHATSAPP NUMBER] — with country code, no + or spaces
  email: "", // [EMAIL — IF AVAILABLE]
  hours: "9:30 AM – 8:30 PM",
  weeklyOff: "Monday",
  staffCount: 3,
  deliverySince: 2020,
  mapEmbedSrc:
    "https://www.google.com/maps?q=Udgir+Bidar+Road+Udgir+413517&output=embed", // replace with exact pinned location embed later
};

export const whatsappLink = (customMessage) => {
  const msg = encodeURIComponent(
    customMessage ||
      `Hello ${shop.name}, I am looking for a spare part.\n\nVehicle Company:\nVehicle Model:\nYear:\nRequired Part:\n\nPlease let me know its availability and price.`
  );
  return `https://wa.me/${shop.whatsapp}?text=${msg}`;
};

export const callLink = (number = shop.phone) => `tel:+91${number}`;

export const productCategories = [
  {
    id: "engine",
    name: "Engine Parts",
    desc: "Quality components for reliable engine performance — gaskets, pistons, seals and more.",
    icon: "engine",
  },
  {
    id: "brake",
    name: "Brake Parts",
    desc: "Brake pads, brake shoes, drums and related braking components.",
    icon: "brake",
  },
  {
    id: "filters",
    name: "Filters",
    desc: "Oil filters, air filters, fuel filters and cabin filters for smooth performance.",
    icon: "filter",
  },
  {
    id: "clutch",
    name: "Clutch Parts",
    desc: "Clutch plates, pressure plates and related clutch assembly components.",
    icon: "clutch",
  },
  {
    id: "electrical",
    name: "Electrical Parts",
    desc: "Bulbs, fuses, switches and other automotive electrical accessories.",
    icon: "electrical",
  },
  {
    id: "bearings",
    name: "Bearings",
    desc: "Quality automotive bearings for wheels, gearbox and engine applications.",
    icon: "bearing",
  },
  {
    id: "belts",
    name: "Belts",
    desc: "Timing belts, fan belts and other engine drive belts.",
    icon: "belt",
  },
  {
    id: "lubricants",
    name: "Lubricants & Oils",
    desc: "Engine oil, gear oil, brake fluid, coolant and other automotive fluids.",
    icon: "oil",
  },
  {
    id: "wipers",
    name: "Wipers & Accessories",
    desc: "Wiper blades and commonly required automobile accessories.",
    icon: "wiper",
  },
  {
    id: "body",
    name: "Body Parts",
    desc: "Bumpers, headlights, grilles and other body components.",
    icon: "body",
  },
];

// Brands as shown on the shop's own signboard
export const vehicleBrands = [
  { id: "maruti", name: "Maruti Suzuki" },
  { id: "mahindra", name: "Mahindra" },
  { id: "tata", name: "Tata" },
  { id: "vw", name: "Volkswagen" },
  { id: "kia", name: "Kia" },
  { id: "ford", name: "Ford" },
  { id: "honda", name: "Honda" },
  { id: "toyota", name: "Toyota" },
  { id: "hyundai", name: "Hyundai" },
  { id: "others", name: "Other Brands" },
];

export const lubricantCategories = [
  { id: "engine-oil", name: "Engine Oil", desc: "For petrol, diesel and CNG engines across brands." },
  { id: "gear-oil", name: "Gear Oil", desc: "Manual and automatic transmission fluids." },
  { id: "brake-fluid", name: "Brake Fluid", desc: "DOT-graded brake fluids for safe braking." },
  { id: "coolant", name: "Coolant", desc: "Radiator coolant for all-season engine cooling." },
  { id: "other-lubricants", name: "Other Lubricants", desc: "Greases, additives and specialty fluids." },
];

export const whyChooseUs = [
  {
    title: "Quality Products",
    desc: "Reliable automobile spare parts and accessories, sourced with care.",
    icon: "quality",
  },
  {
    title: "Multiple Vehicle Brands",
    desc: "Parts available for Maruti Suzuki, Hyundai, Mahindra, Tata and more.",
    icon: "brands",
  },
  {
    title: "Automotive Product Knowledge",
    desc: "We help you find the exact spare part your vehicle needs.",
    icon: "knowledge",
  },
  {
    title: "Competitive Pricing",
    desc: "Quality products offered at fair, reasonable prices.",
    icon: "price",
  },
  {
    title: "Customer-Focused Service",
    desc: "Friendly, honest and reliable assistance every time you visit.",
    icon: "service",
  },
  {
    title: "Easy Enquiry",
    desc: "Quickly reach us by phone call or WhatsApp for any part.",
    icon: "enquiry",
  },
];

// Real photos of the shop, supplied by the owner
export const galleryImages = [
  { id: "storefront", src: "/images/signage-close.jpg" },
  { id: "shelf", src: "/images/shelf-parts-1.jpg" },
  { id: "warehouse", src: "/images/warehouse-aisle.jpg" },
  { id: "oils", src: "/images/oil-shelf.jpg" },
  { id: "shocks", src: "/images/shocks-shelf.jpg" },
  { id: "parts", src: "/images/parts-shelf-2.jpg" },
];

export const testimonials = [
  { id: "vedant", name: "Vedant Patil", rating: 5 },
  { id: "omkar", name: "Omkar Jadhav", rating: 5 },
  { id: "shubham", name: "Shubham Dapke", rating: 5 },
];
