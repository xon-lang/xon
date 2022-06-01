import { parseExpression } from '../../../util/parse';
import { DefinitionDeclarationMetadata } from '../../declaration/definition/definition-declaration-metadata';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { IdValueExpressionMetadata } from './id-value-expression-metadata';

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(
    tree,
    new TestDeclarationScope(),
  ) as IdValueExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdValueExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('None');
  expect(metadata.declaration().length).toBe(0);
});

test('none object', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(
    tree,
    new TestDeclarationScope(),
  ) as IdValueExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdValueExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('none');
  expect(metadata.declaration().length).toBe(0);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(
    tree,
    new TestDeclarationScope(),
  ) as IdValueExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdValueExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('Any');
  expect(metadata.declaration().length).toBe(0);
});

test('none is None', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getValueExpressionMetadata(tree, scope);

  const codeNone = 'None';
  const treeNone = parseExpression(codeNone);
  const metadataNone = getValueExpressionMetadata(treeNone, scope);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getValueExpressionMetadata(treeFloat, scope);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
