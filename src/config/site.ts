// Company postal address — NOT translated (legal name and address stay as-is in every locale).
export const companyAddress = {
  legalName: "Injectra Corporation",
  line: "6314 Kingspointe Pkwy Ste 3, Orlando, FL 32819-6531, USA",
} as const;

/** Where the map opens: the building, not a business. Searching the suite ("Ste 3") makes Google Maps jump to another
 * company listed in it (PURAGAIN WATER), so the search uses the street address only. */
const companyMapsQuery = "6314 Kingspointe Pkwy, Orlando, FL 32819, USA";

export const companyMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyMapsQuery)}`;
