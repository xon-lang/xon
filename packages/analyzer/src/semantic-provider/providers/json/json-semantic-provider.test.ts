import {
  $ObjectTypeSemantic,
  newJsonSemanticProvider,
  newSemanticContext,
  ObjectTypeSemantic,
} from '#analyzer';
import {newText, newUri} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Json semantic', async () => {
  const text = newText('{"a": 1}');
  const provider = newJsonSemanticProvider();
  const semantic = provider.provideSemantic(
    newSemanticContext(),
    newUri(newText()),
    text,
  ) as ObjectTypeSemantic;

  expect(is(semantic, $ObjectTypeSemantic())).toBeTruthy();
  expect(semantic.scope?.count()).toBe(1);
  expect(semantic.scope?.get(newText('a'))?.first()?.name.toNativeString()).toBe('a');
});
