import { parseExpression } from '../../../../util/parse';
import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { getTypeExpressionMetadata } from '../type-expression-metadata-helper';
import { IdTypeExpressionMetadata } from './id-type-expression-metadata';

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const metadata = getTypeExpressionMetadata(
    tree,
    new TestDeclarationScope(),
  ) as IdTypeExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdTypeExpressionMetadata);
  expect(metadata.definition()).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition().name).toBe('None');
  expect(metadata.definition().allAttributes().length).toBe(0);
});

test('none object', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const metadata = getTypeExpressionMetadata(
    tree,
    new TestDeclarationScope(),
  ) as IdTypeExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdTypeExpressionMetadata);
  expect(metadata.definition()).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition().name).toBe('none');
  expect(metadata.definition().allAttributes().length).toBe(0);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  const metadata = getTypeExpressionMetadata(
    tree,
    new TestDeclarationScope(),
  ) as IdTypeExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdTypeExpressionMetadata);
  expect(metadata.definition()).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition().name).toBe('Any');
  expect(metadata.definition().allAttributes().length).toBe(0);
});

test('none is None', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeExpressionMetadata(tree, scope);

  const codeNone = 'None';
  const treeNone = parseExpression(codeNone);
  const metadataNone = getTypeExpressionMetadata(treeNone, scope);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getTypeExpressionMetadata(treeFloat, scope);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
