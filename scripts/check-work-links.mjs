// Run after npm run build: node scripts/check-work-links.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../dist/work-links/index.html', import.meta.url), 'utf8');
const links = [...page.matchAll(/<a\b[^>]*href="(https:\/\/[^\"]+\.jp\.larksuite\.com[^\"]*)"[^>]*>/g)];
assert.equal(links.length, 15);
for (const host of ['uxacademy', 'apirakpanatkool', 'solidplan']) {
  for (const path of ['', '/base', '/mail', '/calendar', '/admin']) {
    const link = links.find(([, href]) => href === `https://${host}.jp.larksuite.com${path}`);
    assert.ok(link, `Missing ${host}${path}`);
    assert.match(link[0], /target="_blank"/);
    assert.match(link[0], /rel="noopener noreferrer"/);
  }
}
for (const html of [page, readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')]) {
  assert.match(html.match(/<footer\b[\s\S]*?<\/footer>/)[0], /href="\/work-links"/);
  assert.doesNotMatch(html.match(/<nav\b[\s\S]*?<\/nav>/)[0], /href="\/work-links"/);
}
console.log('Passed: 15 workspace links, new tabs, footer entry, and main menu unchanged.');
