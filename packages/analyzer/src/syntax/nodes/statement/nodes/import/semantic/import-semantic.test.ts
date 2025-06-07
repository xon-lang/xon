import {
  $AttributeDeclarationSemantic,
  $IntegerTypeSemantic,
  $ObjectTypeSemantic,
  $StringTypeSemantic,
  AttributeDeclarationSemantic,
  IntegerTypeSemantic,
  newSemanticProviderResolver,
  ObjectTypeSemantic,
  StringTypeSemantic,
} from '#analyzer';
import {newText, newUri} from '#common';
import {is} from '#typing';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('Xon file import', async () => {
  const fileName = 'test-files/import-semantic-test-file.xon';
  const filePath = newText(resolve(__dirname, fileName));
  const fileUri = newUri(filePath);
  const semanticProvider = newSemanticProviderResolver().resolve(fileUri)!;
  const semantic = (await semanticProvider.provideSemantic(newUri(newText()), fileUri)) as ObjectTypeSemantic;

  expect(semantic).toBeTruthy();
  expect(is(semantic, $ObjectTypeSemantic())).toBe(true);
  expect(semantic.scope?.count()).toBe(1);
  expect(semantic.scope?.get(newText('Point'))?.first()?.name.toNativeString()).toBe('Point');
});

test('Json file import', async () => {
  const fileName = 'test-files/import-semantic-test-file.json';
  const filePath = newText(resolve(__dirname, fileName));
  const fileUri = newUri(filePath);
  const semanticProvider = newSemanticProviderResolver().resolve(fileUri)!;
  const semantic = (await semanticProvider.provideSemantic(newUri(newText()), fileUri)) as ObjectTypeSemantic;

  expect(semantic).toBeTruthy();
  expect(is(semantic, $ObjectTypeSemantic())).toBe(true);
  expect(semantic.scope?.count()).toBe(2);

  const widthProperty = semantic.scope?.get(newText('width'))?.first() as AttributeDeclarationSemantic;

  expect(is(widthProperty, $AttributeDeclarationSemantic())).toBe(true);
  expect(widthProperty.name.toNativeString()).toBe('width');
  expect(is(widthProperty.type, $StringTypeSemantic())).toBe(true);
  expect((widthProperty.type as StringTypeSemantic).value.toNativeString()).toBe('37px');

  const heightProperty = semantic.scope?.get(newText('height'))?.first() as AttributeDeclarationSemantic;

  expect(is(heightProperty, $AttributeDeclarationSemantic())).toBe(true);
  expect(heightProperty.name.toNativeString()).toBe('height');
  expect(is(heightProperty.type, $IntegerTypeSemantic())).toBe(true);
  expect((heightProperty.type as IntegerTypeSemantic).value).toBe(123);
});
