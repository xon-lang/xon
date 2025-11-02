import {$ObjectSemantic, newXonSemanticProvider, ObjectSemantic} from '#analyzer';
import {is, newText, newUri} from '#core';
import {expect, test} from 'vitest';

test('Xon semantic', async () => {
  const text = newText('type Point');
  const provider = newXonSemanticProvider();
  const semantic = provider.provideSemantic(newUri(newText()), newUri(newText()), text) as ObjectSemantic;

  expect(is(semantic, $ObjectSemantic())).toBeTruthy();
  expect(semantic.scope?.count()).toBe(1);
  expect(semantic.scope?.get(newText('Point'))?.first()?.name.toNativeString()).toBe('Point');
});
