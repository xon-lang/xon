import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.attributes().length).toBe(1);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.attributes().length).toBe(1);
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
