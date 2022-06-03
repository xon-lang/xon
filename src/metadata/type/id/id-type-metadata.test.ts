import { parseExpression } from '../../../util/parse';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getTypeMetadata } from '../type-metadata-helper';
import { IdTypeMetadata } from './id-type-metadata';

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope) as IdTypeMetadata;

  expect(metadata).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.definition()).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition()).toBe(scope.core.none);
  expect(metadata.definition().name).toBe('None');
  expect(metadata.definition().allAttributes().length).toBe(0);
});

test('none object', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const metadata = getTypeMetadata(tree, new TestDeclarationScope()) as IdTypeMetadata;

  expect(metadata).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.definition()).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition().name).toBe('none');
  expect(metadata.definition().allAttributes().length).toBe(0);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  const metadata = getTypeMetadata(tree, new TestDeclarationScope()) as IdTypeMetadata;

  expect(metadata).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.definition()).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition().name).toBe('Any');
  expect(metadata.definition().allAttributes().length).toBe(0);
});

test('none is None', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope);

  const codeNone = 'None';
  const treeNone = parseExpression(codeNone);
  const metadataNone = getTypeMetadata(treeNone, scope);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getTypeMetadata(treeFloat, scope);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
