import {getSemanticScopeFromUri} from '#analyzer';
import {newText, newUri} from '#common';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('Xon file import scope', () => {
  const fileName = 'test-files/import-semantic-test-file.xon';
  const filePath = newText(resolve(__dirname, fileName));
  const scope = getSemanticScopeFromUri(newUri(filePath))!;

  expect(scope).toBeTruthy();
  expect(scope.count()).toBe(1);
  expect(scope.get(newText('Point'))?.first()?.name.toNativeString()).toBe('Point');
});

test('Json file import scope', () => {
  const fileName = 'test-files/import-semantic-test-file.json';
  const filePath = newText(resolve(__dirname, fileName));
  const scope = getSemanticScopeFromUri(newUri(filePath))!;

  expect(scope).toBeTruthy();
  expect(scope.count()).toBe(2);
  const a = scope.get(newText('width'));
  const b = a?.first()?.name;
  expect(scope.get(newText('width'))?.first()?.name.toNativeString()).toBe('width');
  expect(scope.get(newText('height'))?.first()?.name.toNativeString()).toBe('height');
});
