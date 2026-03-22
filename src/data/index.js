import semiconductors from './semiconductors.js';
import defense from './defense.js';
import nuclear from './nuclear.js';
import ev from './ev.js';
import datacenter from './datacenter.js';
import robotics from './robotics.js';

export const INDUSTRIES = [
  semiconductors,
  defense,
  nuclear,
  ev,
  datacenter,
  robotics,
];

export function getIndustry(id) {
  return INDUSTRIES.find(ind => ind.id === id) || null;
}
