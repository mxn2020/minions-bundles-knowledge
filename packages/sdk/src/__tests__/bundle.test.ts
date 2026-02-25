import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the conceptType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'concept');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Concept');
        expect(type?.schema.length).toBe(3);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('definition');
        expect(fieldNames).toContain('aliases');
    });

    it('should define the documentType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'document');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Document');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('author');
        expect(fieldNames).toContain('url');
        expect(fieldNames).toContain('publishDate');
    });

    it('should define the researchNoteType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'researchNote');
        expect(type).toBeDefined();
        expect(type?.name).toBe('ResearchNote');
        expect(type?.schema.length).toBe(3);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('body');
        expect(fieldNames).toContain('tags');
    });

    it('should define the citationType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'citation');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Citation');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('sourceId');
        expect(fieldNames).toContain('targetId');
        expect(fieldNames).toContain('targetType');
        expect(fieldNames).toContain('pageOrQuote');
    });
});
