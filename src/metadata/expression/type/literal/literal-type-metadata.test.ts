import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '../type-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree);

  expect(metadata.attributesScope().declarations.length).toBe(6);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree);

  expect(metadata.attributesScope().declarations.length).toBe(6);
});

test('7 is integer', () => {
  const code = '7';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree);

  const codeInteger = 'Number';
  const treeInteger = parseExpression(codeInteger);
  treeInteger.scope.parent = new TestDeclarationScope();
  const metadataInteger = fillTypeMetadata(treeInteger);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  treeFloat.scope.parent = new TestDeclarationScope();
  const metadataFloat = fillTypeMetadata(treeFloat);

  expect(metadata.is(metadataInteger)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
