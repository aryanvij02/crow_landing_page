// Brandfetch Logo Link URLs - using the specific URLs provided
export const BRAND_LOGOS = {
  calendly: 'https://cdn.brandfetch.io/calendly.com/w/502/h/512/symbol?c=1idaFb_oZ_r0kjOw5vU',
  opentable: 'https://cdn.brandfetch.io/opentable.com/w/200/h/200?c=1idaFb_oZ_r0kjOw5vU',
  uber: 'https://cdn.brandfetch.io/uber.com/w/512/h/172/logo?c=1idaFb_oZ_r0kjOw5vU',
  lyft: 'https://cdn.brandfetch.io/lyft.com/w/512/h/363/logo?c=1idaFb_oZ_r0kjOw5vU',
  yelp: 'https://cdn.brandfetch.io/yelp.com/w/400/h/400?c=1idaFb_oZ_r0kjOw5vU',
  expedia: 'https://cdn.brandfetch.io/expedia.com/w/400/h/400?c=1idaFb_oZ_r0kjOw5vU'
} as const;

// Company domains mapping (updated to include Expedia instead of LinkedIn)
export const COMPANY_DOMAINS = {
  calendly: 'calendly.com',
  opentable: 'opentable.com',
  uber: 'uber.com',
  lyft: 'lyft.com',
  yelp: 'yelp.com',
  expedia: 'expedia.com'
} as const;

// Fallback logos in case Brandfetch fails
export const FALLBACK_LOGOS = {
  calendly: 'https://logo.clearbit.com/calendly.com',
  opentable: 'https://logo.clearbit.com/opentable.com',
  uber: 'https://logo.clearbit.com/uber.com',
  lyft: 'https://logo.clearbit.com/lyft.com',
  yelp: 'https://logo.clearbit.com/yelp.com',
  expedia: 'https://logo.clearbit.com/expedia.com'
} as const;

// Cache for logos to avoid repeated API calls
const logoCache = new Map<string, string>();

export async function fetchBrandLogo(company: keyof typeof COMPANY_DOMAINS): Promise<string> {
  // Check cache first
  if (logoCache.has(company)) {
    return logoCache.get(company)!;
  }

  // Use the direct Brandfetch Logo Link URL first
  const brandfetchUrl = BRAND_LOGOS[company];
  
  try {
    const response = await fetch(brandfetchUrl);
    
    if (response.ok) {
      logoCache.set(company, brandfetchUrl);
      return brandfetchUrl;
    }
  } catch (error) {
    console.warn(`Failed to fetch logo for ${company} from Brandfetch:`, error);
  }

  // Fallback to Clearbit
  try {
    const clearbitUrl = FALLBACK_LOGOS[company];
    const response = await fetch(clearbitUrl);
    
    if (response.ok) {
      logoCache.set(company, clearbitUrl);
      return clearbitUrl;
    }
  } catch (error) {
    console.warn(`Failed to fetch logo for ${company} from Clearbit:`, error);
  }

  // Ultimate fallback - return a generic placeholder
  const placeholder = `https://ui-avatars.com/api/?name=${company}&size=64&background=3B82F6&color=fff&format=svg`;
  logoCache.set(company, placeholder);
  return placeholder;
}

// Batch fetch all logos
export async function fetchAllLogos(): Promise<Record<keyof typeof COMPANY_DOMAINS, string>> {
  const companies = Object.keys(COMPANY_DOMAINS) as (keyof typeof COMPANY_DOMAINS)[];
  
  const logoPromises = companies.map(async (company) => {
    const logoUrl = await fetchBrandLogo(company);
    return [company, logoUrl] as const;
  });
  
  const results = await Promise.all(logoPromises);
  
  return Object.fromEntries(results) as Record<keyof typeof COMPANY_DOMAINS, string>;
} 