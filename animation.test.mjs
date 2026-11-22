import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');

test('re site reveals sections and cards as they enter the viewport', () => {
  assert.match(html, /\.reveal-section\s*\{[^}]*opacity\s*:\s*0/);
  assert.match(html, /\.reveal-section\.is-visible\s*\{[^}]*opacity\s*:\s*1/);
  assert.match(html, /new IntersectionObserver/);
});

test('re site respects reduced motion preferences', () => {
  assert.match(html, /prefers-reduced-motion:reduce[^}]*\.reveal-section/);
});
