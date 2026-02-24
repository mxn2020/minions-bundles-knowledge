/**
 * @module minions-bundles-knowledge/relations
 * Relation definitions for Minions Bundle: Knowledge.
 */

export const bundleRelations = [
  { from: 'researchNote', relation: 'explains', to: 'concept' },
  { from: 'citation', relation: 'cites', to: 'document' },
];

