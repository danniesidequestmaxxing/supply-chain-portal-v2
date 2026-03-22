import semiconductors from './semiconductors.js';
import defense from './defense.js';
import nuclear from './nuclear.js';
import ev from './ev.js';

export const INDUSTRIES = [
  semiconductors,
  defense,
  nuclear,
  ev,
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
