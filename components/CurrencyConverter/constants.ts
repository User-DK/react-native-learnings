export const currencyByRupee: Currency[] = [
  {
    name: 'DOLLAR',
    value: 1 / 83.47, // Assuming you retrieved the USD-INR rate as 83.47
    flag: '🇺🇸',
    symbol: '$',
  },
  {
    name: 'EURO',
    value: 1 / 90.548605, // You can replace this with the actual EUR-INR rate
    flag: '🇪🇺',
    symbol: '€',
  },
  {
    name: 'POUND',
    value: 1 / 106.273542, // You can replace this with the actual GBP-INR rate
    flag: '🇬🇧',
    symbol: '£',
  },
  {
    name: 'RUBEL',
    value: 1 / 0.85040469, // Assuming you have the RUB-INR rate readily available
    flag: '🇷🇺',
    symbol: '₽',
  },
  {
    name: 'AUS DOLLAR',
    value: 1 / 55.578165, // You can replace this with the actual AUD-INR rate
    flag: '🇦🇺',
    symbol: 'A$',
  },
  {
    name: 'CAN DOLLAR',
    value: 1 / 61.177631, // You can replace this with the actual CAD-INR rate
    flag: '🇨🇦',
    symbol: 'C$',
  },
  {
    name: 'YEN',
    value: 1 / 1.5909089, // Assuming you have the JPY-INR rate readily available
    flag: '🇯🇵',
    symbol: '¥',
  },
  {
    name: 'DINAR',
    value: 1 / 0.0037446993, // Assuming you have the KWD-INR rate readily available
    flag: '🇰🇼',
    symbol: 'KD',
  },
  {
    name: 'BITCOIN', // Crypto rates can fluctuate significantly throughout the day
    value: 0.000000543544886, // Placeholder value, consider using an API for live rates
    flag: '',
    symbol: '₿',
  },
];
