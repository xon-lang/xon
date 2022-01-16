import { parseExpression } from '../../../util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(10);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(12);
});

test('7 is integer', () => {
  const code = '7';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  const codeInteger = 'Integer';
  const treeInteger = parseExpression(code);
  const metadataInteger = getExpressionMetadata(tree, new CoreDeclarationScope());

  const codeFloat = 'Float';
  const treeFloat = parseExpression(code);
  const metadataFloat = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.is(metadataInteger)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});

test('3.7 is not integer', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(12);
});
