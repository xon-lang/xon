import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '../type-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = fillTypeMetadata(tree, new TestDeclarationScope());

  expect(metadata.attributesScope().declarations.length).toBe(1);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = fillTypeMetadata(tree, new TestDeclarationScope());

  expect(metadata.attributesScope().declarations.length).toBe(2);
});

test('7 is integer', () => {
  const code = '7';
  const tree = parseExpression(code);
  const metadata = fillTypeMetadata(tree, new TestDeclarationScope());

  const codeInteger = 'Number';
  const treeInteger = parseExpression(codeInteger);
  const metadataInteger = fillTypeMetadata(treeInteger, new TestDeclarationScope());

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = fillTypeMetadata(treeFloat, new TestDeclarationScope());

  expect(metadata.is(metadataInteger)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
