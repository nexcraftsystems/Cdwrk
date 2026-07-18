export interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  currency: string;
  symbol: string;
  lang: string;
  basePrice: string;
  originalPrices: {
    service1: string;
    service2: string;
    service3: string;
    service4: string;
  };
  statsOriginalMarket: string;
  formDisclaimer: string;
}

export const COUNTRIES: CountryConfig[] = [
  {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    currency: 'MYR',
    symbol: 'RM',
    lang: 'bm',
    basePrice: 'RM 999',
    originalPrices: {
      service1: 'RM 5,000',
      service2: 'RM 15,000',
      service3: 'RM 12,000',
      service4: 'RM 10,000',
    },
    statsOriginalMarket: 'RM 35,000',
    formDisclaimer: 'RM 999 flat-rate slot. Join the waitlist now to get this special offer, limited to 10 clients only.',
  },
  {
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    currency: 'IDR',
    symbol: 'Rp',
    lang: 'id',
    basePrice: 'Rp 3.3 Juta',
    originalPrices: {
      service1: 'Rp 16.5 Juta',
      service2: 'Rp 49.5 Juta',
      service3: 'Rp 39.6 Juta',
      service4: 'Rp 33.0 Juta',
    },
    statsOriginalMarket: 'Rp 115.0 Juta',
    formDisclaimer: 'Slot harga rata Rp 3.3 Juta. Sertai senarai sekarang untuk tawaran istimewa ini, terhad kepada 10 klien sahaja.',
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    currency: 'PHP',
    symbol: '₱',
    lang: 'ph',
    basePrice: '₱12,500',
    originalPrices: {
      service1: '₱62,500',
      service2: '₱187,500',
      service3: '₱150,000',
      service4: '₱125,000',
    },
    statsOriginalMarket: '₱437,500',
    formDisclaimer: '₱12,500 flat-rate slot. Join the waitlist now to get this special offer, limited to 10 clients only.',
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    currency: 'AED',
    symbol: 'AED',
    lang: 'ar',
    basePrice: 'AED 800',
    originalPrices: {
      service1: 'AED 4,000',
      service2: 'AED 12,000',
      service3: 'AED 9,600',
      service4: 'AED 8,000',
    },
    statsOriginalMarket: 'AED 28,000',
    formDisclaimer: 'AED 800 flat-rate slot. Join the waitlist now to get this special offer, limited to 10 clients only.',
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    currency: 'SGD',
    symbol: 'S$',
    lang: 'en',
    basePrice: 'S$ 300',
    originalPrices: {
      service1: 'S$ 1,500',
      service2: 'S$ 4,500',
      service3: 'S$ 3,600',
      service4: 'S$ 3,000',
    },
    statsOriginalMarket: 'S$ 10,500',
    formDisclaimer: 'S$ 300 flat-rate slot. Join the waitlist now to get this special offer, limited to 10 clients only.',
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    currency: 'EUR',
    symbol: '€',
    lang: 'fr',
    basePrice: '€200',
    originalPrices: {
      service1: '€1,000',
      service2: '€3,000',
      service3: '€2,400',
      service4: '€2,000',
    },
    statsOriginalMarket: '€7,000',
    formDisclaimer: 'Tarif fixe €200. Rejoignez la liste d\'attente pour obtenir cette offre spéciale, limitée à 10 clients.',
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    symbol: '£',
    lang: 'en',
    basePrice: '£170',
    originalPrices: {
      service1: '£850',
      service2: '£2,550',
      service3: '£2,040',
      service4: '£1,700',
    },
    statsOriginalMarket: '£5,950',
    formDisclaimer: '£170 flat-rate slot. Join the waitlist now to get this special offer, limited to 10 clients only.',
  },
  {
    code: 'TR',
    name: 'Turkiye',
    flag: '🇹🇷',
    currency: 'TRY',
    symbol: '₺',
    lang: 'tr',
    basePrice: '₺7,500',
    originalPrices: {
      service1: '₺37,500',
      service2: '₺112,500',
      service3: '₺90,000',
      service4: '₺75,000',
    },
    statsOriginalMarket: '₺262,500',
    formDisclaimer: '₺7,500 sabit fiyat slotu. Bu özel teklifi almak için bekleme listesine katılın, sadece 10 müşteriyle sınırlıdır.',
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    symbol: '$',
    lang: 'en',
    basePrice: '$220',
    originalPrices: {
      service1: '$1,100',
      service2: '$3,300',
      service3: '$2,640',
      service4: '$2,200',
    },
    statsOriginalMarket: '$7,700',
    formDisclaimer: '$220 flat-rate slot. Join the waitlist now to get this special offer, limited to 10 clients only.',
  }
];

export function getCountry(code: string): CountryConfig {
  return COUNTRIES.find(c => c.code.toUpperCase() === code.toUpperCase()) || COUNTRIES[0];
}
