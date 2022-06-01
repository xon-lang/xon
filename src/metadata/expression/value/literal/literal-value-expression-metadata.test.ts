import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getExpressionMetadata } from '../value-expression-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.declaration().length).toBe(1);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.declaration().length).toBe(1);
});

test('7 is integer', () => {
  const code = '7';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  const codeInteger = 'Number';
  const treeInteger = parseExpression(codeInteger);
  const metadataInteger = getExpressionMetadata(treeInteger, new TestDeclarationScope());

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getExpressionMetadata(treeFloat, new TestDeclarationScope());

  expect(metadata.is(metadataInteger)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
