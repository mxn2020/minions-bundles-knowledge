/**
 * @module minions-bundles-knowledge/bundle
 * MinionType definitions and imports for Minions Bundle: Knowledge.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const conceptType: MinionType = {
  id: 'bundle-knowledge-concept',
  name: 'Concept',
  slug: 'concept',
  description: 'An abstract idea, entity, or topic',
  icon: '🧠',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'definition', type: 'string', label: 'definition' },
    { name: 'aliases', type: 'string', label: 'aliases' },
  ],
};

export const documentType: MinionType = {
  id: 'bundle-knowledge-document',
  name: 'Document',
  slug: 'document',
  description: 'A source of information (article, book, paper)',
  icon: '📄',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'author', type: 'string', label: 'author' },
    { name: 'url', type: 'string', label: 'url' },
    { name: 'publishDate', type: 'date', label: 'publishDate' },
  ],
};

export const researchNoteType: MinionType = {
  id: 'bundle-knowledge-researchNote',
  name: 'ResearchNote',
  slug: 'researchNote',
  description: 'A synthesized atom of knowledge',
  icon: '📝',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'tags', type: 'string', label: 'tags' },
  ],
};

export const citationType: MinionType = {
  id: 'bundle-knowledge-citation',
  name: 'Citation',
  slug: 'citation',
  description: 'A link between a note/concept and its source document',
  icon: '🔗',
  schema: [
    { name: 'sourceId', type: 'string', label: 'sourceId' },
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'targetType', type: 'select', label: 'targetType' },
    { name: 'pageOrQuote', type: 'string', label: 'pageOrQuote' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  conceptType,
  documentType,
  researchNoteType,
  citationType,
];

