import {$ObjectSemantic, newJsonSemanticProvider, newSemanticContext, ObjectSemantic} from '#analyzer';
import {is, newText, newUri} from '#core';
import {expect, test} from 'vitest';

test('Json semantic', async () => {
  const text = newText('{"a": 1}');
  const provider = newJsonSemanticProvider();
  const semantic = provider.provideSemantic(
    newSemanticContext().uri,
    newUri(newText()),
    text,
  ) as ObjectSemantic;

  expect(is(semantic, $ObjectSemantic())).toBeTruthy();
  expect(semantic.scope?.count()).toBe(1);
  expect(semantic.scope?.get(newText('a'))?.first()?.name.toNativeString()).toBe('a');
});
