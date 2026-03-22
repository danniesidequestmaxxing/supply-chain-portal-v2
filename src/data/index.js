import semiconductors from './semiconductors.js';
import defense from './defense.js';

export const INDUSTRIES = [
  semiconductors,
  defense,
  {
    id: 'electric-vehicles',
    name: 'Electric Vehicles',
    icon: '🚗',
    description: 'The global EV supply chain — from battery materials and cell manufacturing through drivetrains, power electronics, and charging infrastructure.',
    comingSoon: true,
    TIERS: [],
    TIER_COLORS: {},
    STREAM_COLORS: {},
    VALUATION_GAPS: [],
    SUPPLY_CHAIN_PAIRS: [],
    GTC_THEMES: {},
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    icon: '☀️',
    description: 'The renewable energy supply chain — from polysilicon and rare earths through solar cells, wind turbines, inverters, and grid-scale storage.',
    comingSoon: true,
    TIERS: [],
    TIER_COLORS: {},
    STREAM_COLORS: {},
    VALUATION_GAPS: [],
    SUPPLY_CHAIN_PAIRS: [],
    GTC_THEMES: {},
  },
  {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    icon: '💊',
    description: 'The pharmaceutical supply chain — from API manufacturing and excipients through CDMOs, drug delivery, distribution, and pharmacy benefit managers.',
    comingSoon: true,
    TIERS: [],
    TIER_COLORS: {},
    STREAM_COLORS: {},
    VALUATION_GAPS: [],
    SUPPLY_CHAIN_PAIRS: [],
    GTC_THEMES: {},
  },
];

export function getIndustry(id) {
  return INDUSTRIES.find(ind => ind.id === id) || null;
}
