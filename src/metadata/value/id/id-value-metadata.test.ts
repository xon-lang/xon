import { parseExpression } from '../../../util/parse';
import { DefinitionDeclarationMetadata } from '../../declaration/definition/definition-declaration-metadata';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueMetadata } from '../value-metadata-helper';
import { IdValueMetadata } from './id-value-metadata';

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope()) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('None');
  expect(metadata.declaration().length).toBe(0);
});

test('none object', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope()) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('none');
  expect(metadata.declaration().length).toBe(0);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope()) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('Any');
  expect(metadata.declaration().length).toBe(0);
});

test('none is None', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getValueMetadata(tree, scope);

  const codeNone = 'None';
  const treeNone = parseExpression(codeNone);
  const metadataNone = getValueMetadata(treeNone, scope);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getValueMetadata(treeFloat, scope);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
