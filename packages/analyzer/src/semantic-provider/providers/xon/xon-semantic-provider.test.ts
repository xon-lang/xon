import {$ObjectTypeSemantic, newSemanticContext, newXonSemanticProvider, ObjectTypeSemantic} from '#analyzer';
import {newText, newUri} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Xon semantic', async () => {
  const text = newText('type Point');
  const provider = newXonSemanticProvider();
  const semantic = provider.provideSemantic(
    newSemanticContext(),
    newUri(newText()),
    text,
  ) as ObjectTypeSemantic;

  expect(is(semantic, $ObjectTypeSemantic())).toBeTruthy();
  expect(semantic.scope?.count()).toBe(1);
  expect(semantic.scope?.get(newText('Point'))?.first()?.name.toNativeString()).toBe('Point');
});
