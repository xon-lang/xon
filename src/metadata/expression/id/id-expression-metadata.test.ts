import { parseExpression } from '../../../util/parse';
import { DefinitionDeclarationMetadata } from '../../declaration/definition/definition-declaration-metadata';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { IdExpressionMetadata } from './id-expression-metadata';

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('None');
  expect(metadata.attributes().length).toBe(0);
});

test('none object', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('none');
  expect(metadata.attributes().length).toBe(0);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(DefinitionDeclarationMetadata);
  expect(metadata.declaration().name).toBe('Any');
  expect(metadata.attributes().length).toBe(0);
});

test('none is None', () => {
  const code = 'none';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree, scope);

  const codeNone = 'None';
  const treeNone = parseExpression(codeNone);
  const metadataNone = getExpressionMetadata(treeNone, scope);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getExpressionMetadata(treeFloat, scope);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
