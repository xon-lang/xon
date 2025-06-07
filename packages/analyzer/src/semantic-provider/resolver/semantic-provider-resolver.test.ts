import {$JsonSemanticProvider, $XonSemanticProvider, newSemanticProviderResolver} from '#analyzer';
import {newText, newUri} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Semantic resolver', async () => {
  const a = newUri(newText('json:abc.json'));
  const b = newUri(newText('abc.json'));
  const c = newUri(newText('abc'));

  const resolver = newSemanticProviderResolver();

  expect(is(resolver.resolve(a), $JsonSemanticProvider())).toBe(true);
  expect(is(resolver.resolve(b), $JsonSemanticProvider())).toBe(true);
  expect(is(resolver.resolve(c), $XonSemanticProvider())).toBe(true);
});
